const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

// Appeal Model
const Appeal = require('../../models/Appeal');

// @route Post api/appellants/appeal/new
// @desc  Create an  Appeal
// @access Private

router.post('/new', auth, async (req, res) => {
    // console.log('req.user.id value is:', req.user.id);

    const { firstName, lastName, casename, casedescription } = req.body;
    const appellantId = req.user.id;

    try {
        // req.appeallant.createAppeal({
        //     firstName,
        //     lastName,
        //     email,
        //     casename,
        //     casedescription,
        // });

        const appeal = Appeal.build({
            firstName,
            lastName,
            casename,
            casedescription,
            appellantId,
        });

        await appeal.save();

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
