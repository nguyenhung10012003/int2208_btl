const spotifyApi = require("../spotifyRequest");

class SearchController {

    index(req, res) {
        // Lấy các gợi ý âm nhạc
        spotifyApi.getRecommendations({
                                          "limit": 10,
                                          "market": 'US',
                                          "seed_artists": '0LcJLqbBmaGUft1e9Mm8HV',
                                          "seed_genres": 'indie',
                                          "seed_tracks": '4NHQUGzhtTLFvgF5SZesLK'
                                      })
            .then(function (data) {
                console.log(data.body);
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    }

    search(req, res) {

    }
}

module.exports = new SearchController();