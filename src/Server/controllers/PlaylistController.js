const spotifyApi = require('../spotifyRequest');
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

    // post
    create(req, res) {
        const newPlaylist = new Playlist(req.body);
        console.log('create new playlist');
        newPlaylist.save();
    }

    addSong(req, res) {
      Playlist.updateOne({_id: req.params.id}, req.body)
        .then(() => {
          console.log('add song successfully');
        })
        .catch((error) => {
          console.log(error);
        })
    }
}
    
module.exports = new PlaylistController();