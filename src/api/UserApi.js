import axiosClient from "./AxiosClient";

class UserApi {
    getDataUser = (params) => {
        const url = `/profile/${params}`;
        return axiosClient.get(url);
    }
    
    editProfile = (params, data) => {
        const url = `/profile/${params}`;
        return axiosClient.put(url, data);
    }

    getUserById = (params) => {
        const url = `/user/${params}`;
        return axiosClient.get(url);
    }

    isLikeSong = (params, data) => {
        const url = `/user/like/exist/${params}?id=${data.id}`;
        return axiosClient.get(url, data);
    }

    addLikeSong = (params, data) => {
        const url = `/user/like/add/${params}`;
        return axiosClient.patch(url, data);
    }

    unlikeSong = (params, data) => {
        const url = `/user/unlike/${params}`;
        return axiosClient.patch(url, data);
    }

    changeName = (params, data) => {
        const url = `/user/change/name/${params}`;
        return axiosClient.patch(url, data);
    }

    changePass = (params, data) => {
        const url = `/user/unlike/password/${params}`;
        return axiosClient.patch(url, data);
    }
}

export default new UserApi();