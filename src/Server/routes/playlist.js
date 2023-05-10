const express = require('express');
const route = express.Router();
const playlistController = require('../controllers/PlaylistController');

route.get('/:id', playlistController.index);
// create 
route.post('/create', playlistController.create);
// edit details playlist
route.put('/editDetails/:id', playlistController.editDetails);
// get library 
route.get('/:user/library', playlistController.library);
// add song to playlist
route.patch('/addSong/:id', playlistController.addSong);
// delete song
route.patch('/deleteSong/:id', playlistController.deleteSong);
// delete playlist
route.delete('/deletePlaylist/:id', playlistController.deletePlaylist);

module.exports = route;