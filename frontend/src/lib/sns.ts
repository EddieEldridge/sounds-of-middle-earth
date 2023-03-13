import { handleSuccessNotification, handleWarningNotification } from '../components/widgets/Notification';
import HTTPClient from './HttpClient';
import { BASE_URL } from './constants';
import { log } from './utils';

const httpClient = new HTTPClient(BASE_URL, '');

export async function publishMessage(message: any) {
    try {
        log(`Publishing SNS message: ${message}`, 'green');

        const requestData = {
            body: {
                message: JSON.stringify(message)
            }
        };

        const response = await httpClient.POST('/sns/message', requestData);

        if (response?.data?.error) {
            handleWarningNotification('Feedback may have not been sent successfully.');
        } else {
            handleSuccessNotification('Feedback sent successfully! Thank you very much!');
        }

        // log(response);
    } catch (error) {
        log(`Error publishing SNS message: ${error}`, 'red');
    }
}