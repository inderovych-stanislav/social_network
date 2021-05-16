import {callApi} from "../common/services/callApi";
import {config} from "../config";

export const authService = {

    async login(email, password) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        return callApi.exec(`${config.apiUrl}/v1/login`, formData);
    },

    async logout() {
        const formData = new FormData();

        return callApi.exec(`${config.apiUrl}/v1/logout`, formData);
    },

    async register(user) {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('name', user.name);
        formData.append('password', user.password);
        formData.append('password_confirmation', user.passwordConfirmation)

        return callApi.exec(`${config.apiUrl}/v1/register`, formData);
    }
};