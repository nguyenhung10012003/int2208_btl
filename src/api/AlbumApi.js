import axiosClient from "./AxiosClient";

class AlbumApi {
    getAlbum = (params) => {
        const url = `/album/${params}`;
        return axiosClient.get(url);
    }
}

export default new AlbumApi();