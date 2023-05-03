const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, default: '' },
    gender: {type: String, default: null},
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    likeSong: {type: Array, default: [] },
    create: { type: Date, default: Date.now },
                        });

module.exports = mongoose.model('User', user);