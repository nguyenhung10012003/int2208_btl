const searchRouter = require('./search');
const siteRouter = require('./site');
const playlistRouter = require('./playlist');

function routes(app) {

    app.use('/search', searchRouter);
    app.use('/', siteRouter);
    app.use('/playlist', playlistRouter);
}

module.exports = routes;