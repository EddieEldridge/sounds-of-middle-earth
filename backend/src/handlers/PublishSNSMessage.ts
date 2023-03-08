import  { SNSClient ,PublishCommand } from '@aws-sdk/client-sns';

import { AWS_REGION, TOPIC_ARN } from '../Constants';

const snsClient = new SNSClient({ region: AWS_REGION });

export async function publishSNSMessage(message: string) {
    const snsParams = {
        Message: message,
        TopicArn: TOPIC_ARN
    };

    try {
        // TO-DO
        // Make this call the lambda functions I setup
        // Put the lambda functions in the same VPC
        // "if you update the resource policy for the lambda, It should only allow the website to trigger the lambda function"
        const data = await snsClient.send(new PublishCommand(snsParams));

        console.log(`Publishing SNS message: ${message}`, 'green');
    } catch (error) {
        console.log(`Error publishing SNS message: ${error}`, 'red');
    }
}