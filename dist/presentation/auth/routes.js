"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const Infraestructure_1 = require("../../Infraestructure");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new Infraestructure_1.AuthDataSourceImpl(); //6
        const authRepository = new Infraestructure_1.AuthRepositoryImpl(datasource); //7
        const controller = new controller_1.AuthController(authRepository); // 2 // 8 actulizacion
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
exports.AuthRoutes = AuthRoutes;
