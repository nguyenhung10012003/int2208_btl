import axiosClient from "./AxiosClient";

class SignupApi {
    signUp = (data) => {
        const url = '/sign-up';
        return axiosClient.post(url, data);
    }
}

export default new SignupApi();