import axiosClient from "./AxiosClient";

class SearchApi {
    getSearch = (params) => {
        const url = '/search';
        return axiosClient.get(url);
    }
    getResult = (params) => {
        const url= `/search/${params.key}`;
        return axiosClient.get(url);
    }
}

export default new SearchApi();