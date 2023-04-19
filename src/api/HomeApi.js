import axiosClient from "./AxiosClient";

class HomeApi {
    getHome = (params) => {
        const url = '/';
        return axiosClient.get(url);
    };

    getLibrary = (params) => {
        const url = '/library';
        return axiosClient.get(url);
    }

}

export default new HomeApi();