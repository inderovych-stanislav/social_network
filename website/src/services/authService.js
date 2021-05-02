import {callApi} from "../common/services/callApi";
import {config} from "../config";

export const authService = {

    async login(username, password) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        return callApi.exec(`${config.apiUrl}/login`, formData);
    }
};