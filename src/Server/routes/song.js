const express = require('express');
const route = express.Router();
const songController = require('../controllers/SongController');

// infor-song
route.get('/infor-song/:id', songController.inforSong);
// get lyric
route.get('/lyric/:id', songController.lyric);
// get song
route.get('/track/:id', songController.song);

module.exports = route;