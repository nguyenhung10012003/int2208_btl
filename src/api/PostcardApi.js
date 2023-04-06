import axiosClient from "./AxiosClient";

class PostcardApi {
    getNewRelease = (params) => {
        const url = '/';
        return axiosClient.get(url);
    };

    getAlbum = (params) => {

    }
}

export default new PostcardApi();