import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

export const envs = {
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
  PORT: env.get('PORT').default(3000).asIntPositive(),
};


