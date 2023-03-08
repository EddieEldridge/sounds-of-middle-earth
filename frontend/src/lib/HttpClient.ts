import axios, { AxiosRequestConfig } from 'axios';

import { log } from './utils';

export default class HTTPClient {
    url: string;
    token: string;

    constructor(url: string, token: string) {
        this.url = url;
        this.token = token;
    }

    // GET
    async GET(endpoint: string): Promise<any> {
        console.log('GET: ' + this.url + endpoint);
        let axiosConfig: AxiosRequestConfig = {};

        if (this.token !== '') {
            axiosConfig = { headers: { Authorization: `Bearer ${this.token}` } };
        }

        try {
            const response = await axios.get(this.url + endpoint, axiosConfig);

            // Print the response
            log(response);

            // Handle the response
            if (response.status === 200) {
                return response.data;
            } else {
                return response.data.error;
            }
        } catch (error) {
            console.log('Axios GET Error: ' + error);
        }
    }

    // POST
    async POST(endpoint: string, data: any): Promise<any> {
        try {
            console.log('POST: ' + this.url + endpoint);

            let axiosConfig: AxiosRequestConfig = {};

            if (this.token !== '') {
                axiosConfig = { headers: { Authorization: `Bearer ${this.token}` } };
            }

            const response = await axios.post(this.url + endpoint, axiosConfig, data);

            if (response.status === 200) {
                return response.data;
            } else {
                return response.data.error;
            }
        } catch (error) {
            console.log('Axios POST Error: ' + error);
        }
    }
}