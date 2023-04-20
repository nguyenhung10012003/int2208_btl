import axiosClient from "./AxiosClient";

class PlaylistApi {
    getAllPlaylistByUser = (params) => {
        const url = `/playlist/user/library`;
        return axiosClient.get(url);
    }

    getPlaylist = (params) => {
        const url = `/playlist/${params}`;
        return axiosClient.get(url);
    }

    createNewPlaylist = (data) => {
        const url = '/playlist/create'
        return axiosClient.post(url, data);
    }

    addSong = (params, data) => {
        const url = `/playlist/addSong/${params}`;
        return axiosClient.put(url, data)
    }

    deleteSong = (params, data) => {
        const url = `/playlist/deleteSong/${params}`;
        return axiosClient.patch(url, data);
    }
}

export default new PlaylistApi();