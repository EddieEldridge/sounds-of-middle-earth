import TheOneAPI from "../api/TheOneAPI";
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult, Handler } from 'aws-lambda';

export const getLOTRQuote: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const theOneAPI = new TheOneAPI();
    const randomLOTRQuote = await theOneAPI.getRandomLOTRQuote();

    console.log('\n ========================');
    console.log(randomLOTRQuote);
    console.log('\n ========================');

    return {
        statusCode: 200,
        body: JSON.stringify(randomLOTRQuote)
    };
};