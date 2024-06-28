"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const swaggerConfig_1 = require("../swaggerConfig"); // Ajusta la ruta según la ubicación de tu archivo
class Server {
    constructor(config) {
        this.app = (0, express_1.default)();
        this.port = config.port;
        // Middleware para analizar JSON
        this.app.use(express_1.default.json());
        // Configurar rutas
        this.app.use('/api', config.routes);
        // Configurar Swagger
        (0, swaggerConfig_1.setupSwagger)(this.app);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
            console.log(`Swagger docs available on http://localhost:${this.port}/api-docs`);
        });
    }
}
exports.Server = Server;
