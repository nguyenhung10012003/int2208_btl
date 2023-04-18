const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playlist = new Schema({
    user_id: { type: String},
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tracks: { type: Array, default: [] },
    create: { type: Date, default: Date.now },
                        });

module.exports = mongoose.model('Playlist', playlist);