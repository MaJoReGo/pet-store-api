"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const env_var_1 = __importDefault(require("env-var"));
dotenv_1.default.config();
exports.envs = {
    MONGO_URL: env_var_1.default.get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: env_var_1.default.get('MONGO_DB_NAME').required().asString(),
    PORT: env_var_1.default.get('PORT').default(3000).asIntPositive(),
};
