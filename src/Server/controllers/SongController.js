const zingMp3 = require('../ZingMP3Request');

class SongController {
    //get information song
    inforSong(req, res) {
        const id = req.params.id;
        zingMp3.getInfoSong(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //get lyric song
    lyric(req, res) {
        const id = req.params.id;
        zingMp3.getLyric(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // get song
    song(req, res) {
        const id = req.params.id;
        zingMp3.getSong(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

module.exports = new SongController();