const express = require('express');
const route = express.Router();
const UserController = require('../controllers/UserController');

//get user
route.get('/:id', UserController.user);
//add like song
route.patch('/like/add/:id', UserController.addLikeSong);
//unlike a song
route.patch('/unlike/:id', UserController.unlikeSong);
//check if a song exist in like list song
route.get('/like/exist/:id', UserController.isLikeSong);
//change name
route.patch('/change/name/:id', UserController.changeName);
//change password
route.patch('/change/password/:id', UserController.changePass);

module.exports = route;