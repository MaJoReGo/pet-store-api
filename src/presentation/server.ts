import express, { Application } from 'express';
import { setupSwagger } from '../swaggerConfig'; // Ajusta la ruta según la ubicación de tu archivo
import { Router } from 'express';

interface ServerConfig {
  port: number;
  routes: Router;
}

export class Server {
  private app: Application;
  private port: number;

  constructor(config: ServerConfig) {
    this.app = express();
    this.port = config.port;

    // Middleware para analizar JSON
    this.app.use(express.json());

    // Configurar rutas
    this.app.use('/api', config.routes);

    // Configurar Swagger
    setupSwagger(this.app);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
      console.log(`Swagger docs available on http://localhost:${this.port}/api-docs`);
    });
  }
}


