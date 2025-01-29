// Manejo de variables de entorno

const env = require('env-var');

export const envs = {
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asString(),
    MAILER_KEY: env.get('MAILER_KEY').required().asString(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
};

