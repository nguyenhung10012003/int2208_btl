const express = require('express');
const route = express.Router();
const playlistController = require('../controllers/playlistController');

// playlist
route.get('/:id', playlistController.index);
route.post('/create', playlistController.create);
route.put('/addSong/:id', playlistController.addSong);

module.exports = route;