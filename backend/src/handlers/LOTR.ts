import { APIGatewayProxyEvent, Context, APIGatewayProxyResult, Handler } from 'aws-lambda';

import TheOneAPI from '../api/TheOneAPI';
import { DEFAULT_HEADERS } from '../Constants';

export const getLOTRQuote: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const theOneAPI = new TheOneAPI();
    const randomLOTRQuote = await theOneAPI.getRandomLOTRQuote();

    console.log('\n ========================');
    console.log(randomLOTRQuote);
    console.log('\n ========================');

    return {
        headers: DEFAULT_HEADERS,
        statusCode: 200,
        body: JSON.stringify(randomLOTRQuote)
    };
};