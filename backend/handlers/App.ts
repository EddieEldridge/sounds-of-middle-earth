import { APIGatewayProxyEvent, Context, APIGatewayProxyResult, Handler } from 'aws-lambda';

export const getApiInfo: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify({application: 'sounds-of-middle-earth-backend', version: '1.0', route: '/api/info'})
    };
};



