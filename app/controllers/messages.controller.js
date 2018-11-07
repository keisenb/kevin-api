const messages = require('../models/message.model');
const mongoose = require('mongoose');

// total count
exports.count = (req, res) => {
    messages.countDocuments()
    .then(count => {
        res.json({count: count});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving count."
        });
    });
};

// top messages
exports.top = (req, res) => {
    messages.aggregate([{ $sortByCount: "$message" }]).limit(10)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving top."
        });
    })
};
