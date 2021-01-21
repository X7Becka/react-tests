import AXIOS, {AxiosResponse} from 'axios'
import {GithubReposTItem} from '../types/github-repos'

const gitAPI = 'https://api.github.com'
const itunesAPI = 'https://itunes.apple.com/search'

type RequestTypes<URL = string, Options = Record<string, unknown>, Data = Record<string, unknown>> = {
    get: (url: URL, options?: Options) => Promise<void | AxiosResponse>
    post: (url: URL, data: Data, options?: Options) => Promise<void | AxiosResponse>
    patch: (url: URL, data: Data, options?: Options) => Promise<void | AxiosResponse>
    put: (url: URL, data: Data, options?: Options) => Promise<void | AxiosResponse>
    delete: (url: URL, options?: Options) => Promise<void | AxiosResponse>
}

export const axios: RequestTypes = {
    get: (url, options) => AXIOS.get(url, options).catch(errorHandler),
    post: (url, data, options) => AXIOS.post(url, data, options).catch(errorHandler),
    patch: (url, data, options) => AXIOS.patch(url, data, options).catch(errorHandler),
    put: (url, data, options) => AXIOS.put(url, data, options).catch(errorHandler),
    delete: (url, options) => AXIOS.delete(url, options).catch(errorHandler)
}

function errorHandler(error: {response: {status: number}}) {
    const status = error.response ? error.response.status : undefined
    switch (status) {
    case 401: {
        console.log('err 401')
        break
    }
    default: console.log('OK')
    }
    throw error
}

export function fetchOrganizationRepositoriesApi(organization: string, page: number): Promise<void | AxiosResponse<GithubReposTItem[]>> {
    return axios.get(`${gitAPI}/orgs/${organization}/repos?page=${page}`)
}

export function getProductsApi(productName: string, page: number): Promise<void | AxiosResponse<any>> {
    return axios.get(`${itunesAPI}?limit=200&term=${productName}`)
}
