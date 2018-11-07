const mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

const message = Schema({
    username: String,
    userid: Number,
    username: String,
    posted: Date,
    _id: ObjectId
});

module.exports = mongoose.model('message', message, 'messages');