import axios from 'axios';

import { log } from './utils';

const DEFAULT_HEADERS = {

}

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

        try {
            const response = await axios.get(
                this.url + endpoint,
                { headers: { Authorization: `Bearer ${this.token}` } });

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
        console.log('POST: ' + this.url + endpoint);
        axios.post(this.url + endpoint, {
            headers: {
                Authorization: `Basic ${this.token}`
            },
            data: data
        })
            .then((response) => {
                return response;
            });

        return;
    }
}