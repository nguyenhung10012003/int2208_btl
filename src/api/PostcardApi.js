import axiosClient from "./AxiosClient";

class PostcardApi {
    getNewRelease = (params) => {
        const url = '/';
        return axiosClient.get(url);
    };

    getAlbum = (params) => {
        const url = `/album/${params}`;
        return axiosClient.get(url);
    }

    getTrack = (params) => {
        const url = `/infor-song/${params}`;
        return axiosClient.get(url);
    }

    getLibrary = (params) => {
        const url = '/library';
        return axiosClient.get(url);
    }
}

export default new PostcardApi();