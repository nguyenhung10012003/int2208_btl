const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comment = new Schema({
    user_email: { type: String},
    track_id: {type: String},
    text: {type: String, default: ''},
    create: { type: Date, default: Date.now },
                        });

module.exports = mongoose.model('Comment', comment);