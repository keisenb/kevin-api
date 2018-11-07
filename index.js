"use strict";
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes
require('./app/routes/messages.routes.js')(app);

// database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    dbName: process.env.DB
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});