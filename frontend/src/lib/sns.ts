import HTTPClient from './HttpClient';
import { BASE_URL } from './constants';
import { log } from './utils';

const httpClient = new HTTPClient(BASE_URL, '');

export async function publishMessage(message: string) {
    try {
        log(`Publishing SNS message: ${message}`, 'green');

        const requestData = {
            body: {
                message: message
            }
        };

        const response = httpClient.POST('/sns/message', requestData);

        log(response);
    } catch (error) {
        log(`Error publishing SNS message: ${error}`, 'red');
    }
}