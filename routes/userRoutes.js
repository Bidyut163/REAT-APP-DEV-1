const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const keys = require('../config/keys');

// User Model
const User = require('../models/User');

// @route POST api/users/admin
// @desc  Create Admin - needs to be deleted
// @access Public

router.post(
    '/admin',
    [
        body('firstName', 'Please enter a first name').isLength({ min: 1 }),
        body('lastName', 'Please enter a last name').isLength({ min: 1 }),
        body('email', 'Please include a valid email').isEmail(),
        body(
            'password',
            'Please enter a password with 6 or more character'
        ).isLength({
            min: 6,
        }),
        body('role', 'Please include an user role').isLength({ min: 1 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { firstName, lastName, email, password, role } = req.body;

        try {
            // See if user exists
            const existingUser = await User.findOne({
                where: { email: email },
            });

            if (existingUser) {
                return res.status(400).json({
                    errors: [{ msg: 'User already exists' }],
                });
            }

            // Create a new User
            const user = User.build({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role,
            });

            // generate the salt
            const salt = await bcrypt.genSalt(10);

            // hash the password using bcryptjs
            user.password = await bcrypt.hash(password, salt);

            // save the user
            await user.save();

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
