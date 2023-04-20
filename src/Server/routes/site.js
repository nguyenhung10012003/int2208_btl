const express = require('express');
const route = express.Router();
const siteController = require('../controllers/SiteController');

//Home
route.get('/', siteController.index);
//Sign-up
route.post('/sign-up', siteController.signUp);
//Login
route.post('/login', siteController.login);
//Album
route.get('/album/:id', siteController.album);

module.exports = route;