import axios from 'axios';
import { printResponse } from './Logger';

export default class HTTPClient {
    url: string;
    token: string;

    constructor(url: string, token: string | undefined) {
        this.url = url;
        this.token = token || 'AUTH_TOKEN_NOT_SET';
    }

    // GET
    async GET(endpoint: string): Promise<any> {
        console.log("GET: " + this.url + endpoint)

        try {
            const response = await axios.get(
                this.url + endpoint,
                { headers: { "Authorization": `Bearer ${this.token}` } })


            // Print the response
            printResponse(response);

            // Handle the response
            if (response.status == 200) {
                return response.data;
            } else {
                return response.data.error;
            }
        } catch (error) {
            console.log("Axios GET Error: " + error);
        }
    }

    // POST
    async POST(endpoint: string): Promise<any> {
        try {
            console.log("POST: " + this.url + endpoint);

            const response = await axios.post(this.url + endpoint, {
                headers: {
                    'Authorization': `Basic ${this.token}`
                }
            })

            printResponse(response);

            // Handle the response
            if (response.status == 200) {
                return response.data;
            } else {
                return response.data.error;
            }

        } catch (error) {
            console.log("Axios POST Error: " + error);
        }
        return;
    }
}
