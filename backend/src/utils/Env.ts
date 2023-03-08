const accessEnvVariable = (key: string, defaultVal?: string): string | undefined => !process.env[key] ? defaultVal : process.env[key];

const LOTR_API_TOKEN = accessEnvVariable('LOTR_API_TOKEN', undefined);

export {
    accessEnvVariable,
    LOTR_API_TOKEN
};