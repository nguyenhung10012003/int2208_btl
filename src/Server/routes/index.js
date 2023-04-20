const searchRouter = require('./search');
const siteRouter = require('./site');
const songRouter = require('./song')
const playlistRouter = require('./playlist');

function routes(app) {
    app.use('/search', searchRouter);
    app.use('/playlist', playlistRouter);
    app.use('/song', songRouter);
    app.use('/', siteRouter);
}

module.exports = routes;