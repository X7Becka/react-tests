import AXIOS from "axios"

const api = "https://api.github.com";

export const axios = {
    get: (url, options) => AXIOS.get(url, options).catch(errorHandler),
    post: (url, data, options) => AXIOS.post(url, data, options).catch(errorHandler),
    patch: (url, data, options) => AXIOS.patch(url, data, options).catch(errorHandler),
    put: (url, data, options) => AXIOS.put(url, data, options).catch(errorHandler),
    delete: (url, options) => AXIOS.delete(url, options).catch(errorHandler)
};

function errorHandler(error) {
    const status = error.response ? error.response.status : null;
    switch (status) {
        case 401: {
            console.log('err 401')
            break;
        }
        default: console.log('OK');
    }
    throw error;
}

export function fetchOrganizationRepositoriesApi(organization = "X7Becka") {
    console.log('API')
    return axios.get(`${api}/orgs/${organization}/repos`)
}
