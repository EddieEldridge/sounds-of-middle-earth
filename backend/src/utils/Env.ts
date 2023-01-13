const accessEnvVariable = (key: string, defaultVal?: string): string | undefined => !process.env[key] ? defaultVal : process.env[key];

const LOTR_API_TOKEN = accessEnvVariable('LOTR_API_TOKEN', undefined);
const API_GATEWAY_ROOT = accessEnvVariable('API_GATEWAY_ROOT', undefined);

export {
    accessEnvVariable,
    LOTR_API_TOKEN,
    API_GATEWAY_ROOT
};