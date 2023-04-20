const Playlist = require('../models/Playlist')

class PlaylistController {

  // get playlist
    index(req, res) {
        Playlist.findById(req.params.id)
          .then((playlist) => {
            playlist = playlist.toObject();
            res.send(playlist);
          })
          .catch((error) => {
            console.log(error)
          })
    }

    // [post] create new playlist
    create(req, res) {
        const newPlaylist = new Playlist(req.body);
        console.log('create new playlist');
        newPlaylist.save();
    }

    // [put] add song to playlist
    addSong(req, res) {
      Playlist.updateOne({_id: req.params.id}, req.body)
        .then(() => {
          console.log('add song successfully');
        })
        .catch((error) => {
          console.log(error);
        })
    }

    // get all playlist by user_id
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
}

module.exports = new PlaylistController();