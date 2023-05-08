import axiosClient from "./AxiosClient";

class SongApi {
    getTrack = (params) => {
        const url = `/song/track/${params}`;
        return axiosClient.get(url);
    }

    getInfoSong = (params) => {
        const url = `/song/infor-song/${params}`;
        return axiosClient.get(url);
    }

    getLyric = (params) => {
        const url = `/song/lyric/${params}`;
        return axiosClient.get(url);
    }

    getArtist = (params) => {
        const url = `/song/artist/${params}`;
        return axiosClient.get(url);
    }

    getComment = (params) => {
        const url = `song/comment/${params}`;
        return axiosClient.get(url);
    }

    postComment = (params, data) => {
        const url = `song/comment/new`;
        return axiosClient.post(url, data);
    }
}

export default new SongApi();