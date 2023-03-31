const spotifyApi = require('../spotifyRequest');
const urlRedirect = require('./UrlRedirect');
const user = require('../models/User');

class SiteController {
    index(req, res) {
        spotifyApi.getNewReleases({limit: 15, offset: 0})
            .then(function (data) {
                res.send(data.body);
            }, function (err) {
                console.log("Something went wrong!", err);
            });
    }

    async signUp(req, res) {
        const newUser = req.body;
        const find = await user.findOne({email: newUser.email});
        if(!find) {
            await user.create(req.body);
            res.redirect(urlRedirect.login);
        }
        else {
            res.redirect(urlRedirect.signUp + '?message=failure');
        }

    }
}

module.exports = new SiteController();