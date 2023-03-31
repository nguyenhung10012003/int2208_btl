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

    async login(req, res) {
        const authUser = req.body;
        const check = await user.find(authUser);
        if(check) {
            res.redirect(urlRedirect.home);
        } else {
            res.redirect(urlRedirect.login + '?message=failure');
        }
    }
}

module.exports = new SiteController();