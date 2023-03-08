import HTTPClient from './HttpClient';
import { BASE_URL } from './constants';
import { log } from './utils';

const httpClient = new HTTPClient(
    BASE_URL,
    '');

export async function getRandomLOTRQuote() {
    const quote = httpClient.GET('/lotr/quote');

    log(quote);
}