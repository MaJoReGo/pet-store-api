import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import { AuthRoutes } from "./presentation/auth/routes";
import { Server } from "./presentation/server";
import { Router } from 'express';

const appRoutes = Router();
appRoutes.use('/auth', AuthRoutes.routes); // Añade tus rutas de autenticación

(async () => {
  await main();
})();

async function main() {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  new Server({
    port: envs.PORT,
    routes: appRoutes,
  }).start();
}
