const zingMp3 = require('../ZingMP3Request');
const Comment = require('../models/Comment');
const User = require('../models/User');
const {type} = require("@testing-library/user-event/dist/type");

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

    async comment(req, res) {
        const id = req.params.id;
        try {
            const comments = await Comment.aggregate([
                                                         // Join với collection User để lấy thông tin avatar, name
                                                         {
                                                             $lookup: {
                                                                 from: "users", // Tên của collection User
                                                                 localField: "user_email",
                                                                 foreignField: "email",
                                                                 as: "user_info"
                                                             }
                                                         },
                                                         // Lấy các trường cần thiết và loại bỏ các trường không cần thiết
                                                         {
                                                             $project: {
                                                                 track_id: 1,
                                                                 text: 1,
                                                                 create: 1,
                                                                 user_email: 1,
                                                                 avatar: { $arrayElemAt: ["$user_info.avatar", 0] },
                                                                 name: { $arrayElemAt: ["$user_info.name", 0] },
                                                             }
                                                         },
                                                         {
                                                             $match: {
                                                                 track_id: id
                                                             }
                                                         }
                                                     ]);

            res.send(comments);
        } catch (err) {
            console.log(err);
            res.send(false);
        }
    }

    async newComment(req, res) {
        const comment = req.body;
        try {
            await Comment.create(comment);
            res.status(200).send(true);
        } catch (err) {
            res.status(500).send(false);
        }
    }
}

module.exports = new SongController();