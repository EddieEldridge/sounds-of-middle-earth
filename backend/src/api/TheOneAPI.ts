import LOTRQuote from './types/LordOfTheRings';
import { LOTR_API_TOKEN } from './utils/Env';
import HTTPClient from './utils/HttpClient';

const httpClient = new HTTPClient('https://the-one-api.dev/v2', LOTR_API_TOKEN);

export default class TheOneAPI {
    async getRandomLOTRQuote(): Promise<LOTRQuote> {
        const id: number = Math.floor(Math.random() * 1000);

        const randomLOTRQuote = new LOTRQuote();

        try {
            // Get the quote
            const quotes: any = await httpClient.GET('/quote');

            randomLOTRQuote.text = quotes.docs[id].dialog;

            // Using the ID from the random quote, get the corresponding character
            const characterData = await httpClient.GET(
                '/character/' + quotes.docs[id].character
            );

            randomLOTRQuote.character = characterData.docs[0].name;

            // Using the ID from the quote, get the corresponding movie
            const movieData = await httpClient.GET(
                '/movie/' + quotes.docs[id].movie
            );

            randomLOTRQuote.movie = movieData.docs[0].name;

            return randomLOTRQuote;
        } catch (error) {
            console.log(error.message);

            return error.message;
        }
    }
}