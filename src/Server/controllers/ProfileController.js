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

    // edit user
    async editProfile(req, res) {
        try {
            await Profile.updateOne({_id: req.params.id}, req.body)
            console.log('update successfully');
        } catch(error) {
            console.log(error);
        }
        }
}

module.exports = new ProfileController();