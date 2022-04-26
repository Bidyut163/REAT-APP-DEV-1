const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

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

// @route POST api/auth
// @desc  Authenticate user and get token
// @access Public

router.post(
    '/',
    [
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'password is required').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            // See if user exists
            const user = await User.findOne({
                where: { email: email },
            });

            if (!user) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            // Check for - Match Password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: `${keys.jwtPayload}${user.id}`,
                    // id: user.id,
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
