import HTTPClient from './HttpClient';
import { BASE_URL } from './constants';
import { log } from './utils';

const httpClient = new HTTPClient(BASE_URL, '');

export async function publishMessage(message: string) {
    try {
        const data = {
            message: message
        };

        log(`Publishing SNS message: ${message}`, 'green');

        const response = httpClient.POST(BASE_URL+'/sns/message', data);

        log(response);
    } catch (error) {
        log(`Error publishing SNS message: ${error}`, 'red');
    }
}