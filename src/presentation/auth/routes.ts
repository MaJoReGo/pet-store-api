import { Router } from 'express';
import { AuthController } from './controller'; 
import { AuthDataSourceImpl, AuthRepositoryImpl} from '../../Infraestructure';

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new AuthDataSourceImpl(); //6
        const authRepository = new AuthRepositoryImpl(datasource); //7
        const controller = new AuthController(authRepository); // 2 // 8 actulizacion

        /**
         * @swagger
         * tags:
         *   name: Auth
         *   description: Authentication related endpoints
         */

        /**
         * @swagger
         * /api/auth/login:
         *   post:
         *     summary: Logs in a user
         *     tags: [Auth]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               email:
         *                 type: string
         *               password:
         *                 type: string
         *     responses:
         *       200:
         *         description: User logged in successfully
         *       400:
         *         description: Bad request
         *       401:
         *         description: Unauthorized
         */
        router.post('/login', controller.loginUser); // 3

        /**
         * @swagger
         * /api/auth/register:
         *   post:
         *     summary: Registers a new user
         *     tags: [Auth]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               email:
         *                 type: string
         *               password:
         *                 type: string
         *               name:
         *                 type: string
         *     responses:
         *       201:
         *         description: User registered successfully
         *       400:
         *         description: Bad request
         */
        router.post('/register', controller.registerUser); // 4

        return router;
    }
}

