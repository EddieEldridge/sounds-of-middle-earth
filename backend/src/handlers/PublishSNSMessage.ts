import  { SNSClient ,PublishCommand } from '@aws-sdk/client-sns';
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult, Handler } from 'aws-lambda';

import { AWS_REGION, DEFAULT_HEADERS, TOPIC_ARN } from '../Constants';

const snsClient = new SNSClient({ region: AWS_REGION });

export const publishSNSMessage: Handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    try {
        if(!event.body) {
            throw new Error(`No event body found on event: ${event}`);
        }

        const content = JSON.parse(event?.body);

        const textMessage = `
            ====== SOUNDS OF MIDDLE EARTH ======
            FEEDBACK: ${JSON.stringify(content.message)}
        `;

        const snsParams = {
            Message: textMessage,
            TopicArn: TOPIC_ARN
        };

        console.log(`Publishing SNS message: ${content.message}`, 'green');

        const data = await snsClient.send(new PublishCommand(snsParams));

        return {
            headers: DEFAULT_HEADERS,
            statusCode: 200,
            body: JSON.stringify(`Successfully sent SNS Message: ${data}`)
        };
    } catch (error) {
        console.log(`Error publishing SNS message: ${error}`, 'red');

        return {
            headers: DEFAULT_HEADERS,
            statusCode: 500,
            body: JSON.stringify(`Internal Server Error: ${error}`)
        };
    }
};