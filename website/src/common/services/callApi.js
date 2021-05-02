
export const callApi = {
    async exec(url, formData) {
        let params = {};
        params.headers = authHeader();

        if(formData){
            params.method = 'POST';
            params.body = formData;
        }

        let response;
        try {
            response = await fetch(
                url,
                params
            );
        } catch (e) {
            console.error('apiCall', e);
            throw new Error('Oops something went wrong :( Please contact your administrator.');
        }

        if (response.status >= 400 && response.status < 600) {

            throw new Error(response.message || response.statusText);
        }

        return await response.json();
    }
};

const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}