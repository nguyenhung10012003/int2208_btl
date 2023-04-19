const searchRouter = require('./search');
const siteRouter = require('./site');
const songRouter = require('./song')

function routes(app) {

    app.use('/search', searchRouter);
    app.use('/song', songRouter);
    app.use('/', siteRouter);
}

module.exports = routes;