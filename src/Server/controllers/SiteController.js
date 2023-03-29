const spotifyApi = require('../spotifyRequest');

class SiteController {
    index(req, res) {

        spotifyApi.getNewReleases({limit: 15, offset: 0})
            .then(function (data) {
                console.log(data.body);
                res.send(data.body);
            }, function (err) {
                console.log("Something went wrong!", err);
            });
    }

    signUp(req, res) {

    }
}

module.exports = new SiteController();