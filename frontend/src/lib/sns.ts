import { log } from './utils';

export async function publishMessage(message: string) {
    try {
        // TO-DO
        // Make this call the lambda functions I setup
        // Put the lambda functions in the same VPC
        // "if you update the resource policy for the lambda, It should only allow the website to trigger the lambda function"
        // const data = await snsClient.send(new PublishCommand(snsParams));

        log(`Publishing SNS message: ${message}`, 'green');
    } catch (error) {
        log(`Error publishing SNS message: ${error}`, 'red');
    }
}