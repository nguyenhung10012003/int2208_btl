const searchRouter = require('./search');
const siteRouter = require('./site');

function routes(app) {

    app.use('/search', searchRouter);
    app.use('/', siteRouter);
}

module.exports = routes;