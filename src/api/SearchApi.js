import axiosClient from "./AxiosClient";

class SearchApi {
    getSearch = async () => {
        const url = '/search';
        return await axiosClient.get(url);
    };

    getResult = (params) => {
        const url= `/search/${params.key}`;
        return axiosClient.get(url);
    }
}


export default new SearchApi();