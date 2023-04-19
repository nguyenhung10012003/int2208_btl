const zingMp3 = require('../ZingMP3Request');
const user = require('../models/User');

class SiteController {
    index(req, res) {
        zingMp3.getHome().then((data) => {
            res.send(data.data.items);
        })
    }

    async signUp(req, res) {
        const newUser = req.body;
        const find = await user.findOne({email: newUser.email});
        if(!find) {
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
        if(check) {
            res.send('1');
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