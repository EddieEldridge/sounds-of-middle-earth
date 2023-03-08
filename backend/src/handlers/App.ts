import { APIGatewayProxyEvent, Context, APIGatewayProxyResult, Handler } from 'aws-lambda';

import { DEFAULT_HEADERS } from '../Constants';

export const getApiInfo: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    return {
        headers: DEFAULT_HEADERS,
        statusCode: 200,
        body: JSON.stringify({ application: 'sounds-of-middle-earth-backend', version: '1.0', route: '/api/info' })
    };
};