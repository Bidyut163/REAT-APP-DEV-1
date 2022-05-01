const express = require('express');
// connect DB
const sequelize = require('./util/database');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API IS RUNNING'));

// Define Routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const appellantUserRoutes = require('./routes/appellants/userRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appellants', appellantUserRoutes);

const PORT = process.env.PORT || 5000;

sequelize
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING');
        });
    })
    .catch((err) => {
        console.log(err);
    });
