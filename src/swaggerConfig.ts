import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import swaggerOptions from './doc/swagger'; // Ajusta la ruta según la ubicación de tu archivo

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export function setupSwagger(app: Application) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
