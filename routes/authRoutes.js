const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const keys = require('../config/keys');

// User Model
const User = require('../models/User');

// @route GET api/auth
// @desc  Test Route
// @access Public

router.get('/', auth, async (req, res) => {
    try {
        let user_id = req.user.id.replace(keys.jwtPayload, '');

        const user = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: user_id,
            },
        });

        // const user = await User.findByPk(req.user.id, {
        //     attributes: { exclude: ['password'] },
        // });
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }

    // res.send('Auth route');
});

module.exports = router;
