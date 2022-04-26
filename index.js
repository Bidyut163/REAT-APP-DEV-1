const express = require('express');
// connect DB
const sequelize = require('./util/database');

const app = express();

app.get('/', (req, res) => res.send('API IS RUNNING'));

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
