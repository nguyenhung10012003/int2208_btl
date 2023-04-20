import axiosClient from "./AxiosClient";

class PlaylistApi {
    getAllPlaylistByUser = (params) => {
        const url = `/user/playlist/${params}`;
        return axiosClient.get(url);
    }

    getPlaylist = (params) => {
        const url = `/playlist/${params}`;
        return axiosClient.get(url);
    }
}

export default new PlaylistApi();