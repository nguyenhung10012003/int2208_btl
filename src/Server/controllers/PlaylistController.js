const Playlist = require('../models/Playlist')

class PlaylistController {

  // get playlist
    async index(req, res) {
        Playlist.findById(req.params.id)
          .then((playlist) => {
            playlist = playlist?.toObject();
            res.send(playlist);
          })
          .catch((error) => {
            console.log(error)
          })
    }

    // [post] create new playlist
    async create(req, res) {
        await Playlist.create(req.body);
        console.log('create new playlist');
    }

    // edit playlist
    async editDetails(req, res) {
        try {
          await Playlist.updateOne({_id: req.params.id}, req.body)
          console.log('update successfully');
        } catch(error) {
          console.log(error);
        }
      }

    // [put] add song to playlist
    async addSong(req, res) {
        try {
          await Playlist.updateOne({_id: req.params.id}, {tracks: req.body}, {upsert: false})
          console.log('add song successfully');
        } catch(error) {
          console.log(error);
        }
      }

    // [patch] delete song from playlist
    async deleteSong(req, res) {
        try{
          await Playlist.updateOne({_id: req.params.id}, {tracks: req.body})
          console.log('delete song done!')
        } catch(error) {
          console.log(error);
        }
    }

    // [delete] delete playlist
    async deletePlaylist(req, res) {
      try{
        await Playlist.deleteOne({_id: req.params.id})
        console.log('delete playlist done!')
      } catch(error) {
        console.log(error);
      }
    }

    // get all playlist by user_id
    async library(req, res) {
      Playlist.find({user_id: req.params.user})
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