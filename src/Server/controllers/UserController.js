const User = require('../models/User');

class UserController {
    user(req, res) {
        const _id = req.params.id;
        User.findOne({_id: _id},
                     {_id: 1, email: 1, name: 1, likeSong: 1})
            .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500);
        });
    }

    isLikeSong(req, res) {
        const _id = req.params.id;
        const songId = req.query.id;
        User.findOne({_id: _id,likeSong: { $in: [songId] }}).then((data) => {
            res.send(data ? {err : false} : {err : true});
        }).catch((err) => res.status(500));
    }


    changeName(req, res) {
        const _id = req.params.id;
        const newName = req.body.name;
        User.findOneAndUpdate({_id: _id}, {name: newName}).then((user) => {
            if(user) res.status(200).send(true);
        }).catch(() => {
            res.status(500);
        });
    }

    changePass(req, res) {
        const _id = req.params.id;
        const newPass = req.body.password;
        User.findOneAndUpdate({_id: _id}, {password: newPass}).then((user) => {
            if(user) res.status(200).send(true);
        }).catch(() => {
            res.status(500);
        });
    }

    async addLikeSong(req, res) {
        const _id = req.params.id;
        const songId = req.body.id; //song id

        try {
            const data = await User.findOneAndUpdate({_id: _id},
                                  {$addToSet: {likeSong: songId}},
                                  {new: true});
            res.send(data ? {err : false} : {err : true});
            console.log('like song done');
        } catch(err) {
            res.status(500);
        }
    }

    async unlikeSong(req, res) {
        const _id = req.params.id;
        const songId = req.body.id;
        try {
            const data = await User.findOneAndUpdate({_id: _id},
                                  {$pull: {likeSong: songId}});

            res.send(data ? {err : false} : {err : true});
            console.log('unlike song done');
        } catch(err) {
            console.log(err);
            res.status(500);
        }
    }
}

module.exports = new UserController();