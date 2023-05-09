const Profile  = require("../models/User");

class ProfileController {
    profileName(req, res) {
        Profile.findOne({ email: req.params.email })
        .then((dataProfile) => {
            dataProfile = dataProfile.toObject();
            res.send(dataProfile);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

module.exports = new ProfileController();