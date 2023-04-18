const express = require('express');
const route = express.Router();
const siteController = require('../controllers/SiteController');

//Home
route.get('/', siteController.index);
//Sign-up
route.post('/sign-up', siteController.signUp);
//Login
route.post('/login', siteController.login);
//information song
route.get('/infor-song/:id', siteController.inforSong);
// album
route.get('/album/:albumId', siteController.album);
//library
route.get('/library',siteController.library);


module.exports = route;