const express = require('express');
const route = express.Router();

const searchController = require('../controllers/SearchController');

//Search with param
route.get('/:key', searchController.search);
//Search
route.get('/', searchController.index);

module.exports = route;