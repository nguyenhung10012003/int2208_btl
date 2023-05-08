const zingMp3 = require('../ZingMP3Request');
const User = require('../models/User');

class SiteController {
    index(req, res) {
        zingMp3.getHome().then((data) => {
            res.send(data.data.items);
        })
    }

    async signUp(req, res) {
        const newUser = req.body;
        const find = await User.findOne({email: newUser.email});
        if(!find) {
            const user = await User.create(req.body);
            res.send({email: user.email, _id: user._id});
        }
        else {
            res.send('0');
        }
    }

    async login(req, res) {
        const authUser = req.body;
        const check = await User.findOne(authUser, {_id: 1, email: 1});
        if(check) {
            res.send(check);
        } else {
            res.send('0');
        }
    }

    album(req, res)  {
        const id = req.params.id;
        zingMp3.getDetailPlaylist(id).then((data) => {
            res.send(data);
        })
    }

    artist(req, res) {
        const name = req.params.name;
        zingMp3.getArtist(name).then((data) => {
            res.send(data);
        })
    }

}

module.exports = new SiteController();