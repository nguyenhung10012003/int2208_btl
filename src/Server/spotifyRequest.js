const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config({path: __dirname + '../../../.env'});

const spotifyApi = new SpotifyWebApi({
                                         clientId: process.env.CLIENT_ID,
                                         clientSecret: process.env.CLIENT_SECRET,
                                     });

    if (!spotifyApi.getAccessToken()) {
        spotifyApi.clientCredentialsGrant()
            .then((data) => {
                spotifyApi.setAccessToken(data.body['access_token']);
                console.log(data.body['access_token']);
            })
            .catch((error) => {
                console.log("Can't get token: " + error);
            })
    }

    setInterval(() => {
        spotifyApi.clientCredentialsGrant()
            .then((data) => {
                spotifyApi.setAccessToken(data.body['access_token']);
                console.log('Refresh access token: ' + data.body['access_token']);
            })
            .catch((error) => {
                console.log("Can't get token: " + error);
            })
    }, 3599 * 1000)

module.exports = spotifyApi;