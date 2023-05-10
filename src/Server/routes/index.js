const searchRouter = require('./search');
const siteRouter = require('./site');
const songRouter = require('./song');
const playlistRouter = require('./playlist');
const userRouter = require('./user');
const profileRouter = require('./profile');

function routes(app) {
    app.use('/search', searchRouter);
    app.use('/playlist', playlistRouter);
    app.use('/song', songRouter);
    app.use('/profile', profileRouter);
    app.use('/user', userRouter);
    app.use('/', siteRouter);
}

module.exports = routes;