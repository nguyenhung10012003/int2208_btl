const express = require('express');
const route = express.Router();
const userController = require('../controllers/ProfileController');

// user-name
route.get('/:email', userController.profileName);
// edit profile
route.put('/:id', userController.editProfile);

module.exports = route;