const spotifyApi = require('../spotifyRequest');
const Playlist = require('../models/Playlist')
const urlRedirect = require('./UrlRedirect');
const user = require('../models/User');

class SiteController {
    index(req, res) {
        spotifyApi.getNewReleases({ limit: 15, offset: 0 })
            .then(function (data) {
                res.send(data.body);
            }, function (err) {
                console.log("Something went wrong!", err);
            });
    }

    //information song
    inforSong(req, res) {
        let dataTrack = {
            track: null,
            artist: null,
        }
        spotifyApi.getTrack(req.params.id)
            .then(function (data) {
                dataTrack.track = data.body;
                let idArtist = data.body.artists[0].id;
                spotifyApi.getArtist(idArtist)
                    .then(function (data) {
                        dataTrack.artist = data.body;
                        res.send(dataTrack);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    // get album
    album(req, res) {
        let dataAlbum = {
            album: null,
            artist: null,
        }
        spotifyApi.getAlbum(req.params.albumId)
            .then((data) => {
                dataAlbum.album = {
                    name: data.body.name,
                    image: data.body.images[0].url,
                    tracks: data.body.tracks,
                };
                let idArtist = data.body.artists[0].id;
                spotifyApi.getArtist(idArtist)
                    .then(function (data) {
                        dataAlbum.artist = data.body;
                        res.send(dataAlbum);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // get library
    library(req, res) {
        Playlist.find({})
          .then((playlist) => {
            playlist = playlist.map(playlist => playlist.toObject())
            res.send(playlist);
          })
          .catch((error) => {
            console.log()
          })
    }


    async signUp(req, res) {
        const newUser = req.body;
        const find = await user.findOne({ email: newUser.email });
        if (!find) {
            await user.create(req.body);
            res.send('1');
        }
        else {
            res.send('0');
        }
    }

    async login(req, res) {
        const authUser = req.body;
        const check = await user.findOne(authUser);
        if (check) {
            res.send('1');
        } else {
            res.send('0');
        }
    }

}

module.exports = new SiteController();