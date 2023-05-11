const zingMp3 = require("../ZingMP3Request");

class SearchController {

    search(req, res) {
        const keySearch = req.params.key;
        zingMp3.search(keySearch).then((data) => {
            res.send(data);
        })
    }

    index(req, res) {
        // Lấy các gợi ý âm nhạc
        zingMp3.getNewReleaseChart().then((data) => {
            res.send(data);
        })
    }
}

module.exports = new SearchController();