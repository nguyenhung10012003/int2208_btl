import axiosClient from "./AxiosClient";

class PlaylistApi {
   getPlaylist = (params) => {
      const url = `/playlist/${params}`;
      return axiosClient.get(url);
   }

   createNewPlaylist = (data) => {
        const url = '/playlist/create';
        return axiosClient.post(url, data);
   }

   addSong = (params, data) => {
      const url = `/playlist/addSong/${params}`;
      return axiosClient.put(url, data)
   }
}

export default new PlaylistApi();