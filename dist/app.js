"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const config_1 = require("./config"); // Asegúrate de que esta importación sea correcta
const mongodb_1 = require("./data/mongodb");
const router_1 = require("./presentation/router");
const server_1 = require("./presentation/server");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongodb_1.MongoDatabase.connect({
            dbName: config_1.envs.MONGO_DB_NAME,
            mongoUrl: config_1.envs.MONGO_URL,
        });
        const app = (0, express_1.default)();
        const port = config_1.envs.PORT;
        // Swagger options
        const options = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Pet Store API', // Cambia esto al nombre de tu API
                    version: '1.0.0',
                    description: 'API for managing a pet store', // Descripción de tu API
                },
                servers: [
                    {
                        url: `http://localhost:${port}`,
                        description: 'Development server',
                    },
                ],
            },
            apis: ['./presentation/router.ts'], // Ajusta esto a la ubicación de tus rutas
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        // Serve Swagger UI
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
        // Inicializa las rutas de tu aplicación
        new server_1.Server({
            port,
            routes: router_1.AppRoutes.routes,
        }).start();
        // Inicia el servidor Express
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    });
}
// Llama a la función principal para iniciar la aplicación
main().catch(err => console.error(err));
