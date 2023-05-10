import axiosClient from "./AxiosClient";

class SearchApi {
    getSearch = async () => {
        const url = '/search';
        return await axiosClient.get(url);
    };

    getResult = async (params) => {
        const url= `/search/${params}`;
        return await axiosClient.get(url);
    }
}


export default new SearchApi();