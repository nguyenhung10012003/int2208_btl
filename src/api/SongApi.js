import axiosClient from "./AxiosClient";

class SongApi {
    getTrack = (params) => {
        const url = `/song/track/${params}`;
        return axiosClient.get(url);
    }

    getInfoSong = (params) => {
        const url = `/song/${params}`;
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
}

export default new SongApi();