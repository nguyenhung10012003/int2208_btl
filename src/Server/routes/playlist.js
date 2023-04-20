const express = require('express');
const route = express.Router();
const playlistController = require('../controllers/PlaylistController');

route.get('/:id', playlistController.index);
// create 
route.post('/create', playlistController.create);
// get library 
route.get('/user/library', playlistController.library);
// add song to playlist
route.put('/addSong/:id', playlistController.addSong);

module.exports = route;