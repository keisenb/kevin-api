const messages = require('../models/message.model');
const mongoose = require('mongoose');


// top users
exports.top = (req, res) => {
    messages.aggregate([{ $sortByCount: "$username" }]).limit(10)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving top."
        });
    })
}


// count of users
exports.count = (req, res) => {
    messages.distinct("username")
    .then(result => {
        res.json({ users: result.length });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving top."
        });
    })
}