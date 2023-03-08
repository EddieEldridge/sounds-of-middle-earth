import  { SNSClient ,PublishCommand } from '@aws-sdk/client-sns';

import { AWS_REGION, DEFAULT_HEADERS, TOPIC_ARN } from '../Constants';

const snsClient = new SNSClient({ region: AWS_REGION });

export async function publishSNSMessage(message: string) {
    const snsParams = {
        Message: message,
        TopicArn: TOPIC_ARN
    };

    try {
        const data = await snsClient.send(new PublishCommand(snsParams));

        console.log(`Publishing SNS message: ${message}`, 'green');

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
}