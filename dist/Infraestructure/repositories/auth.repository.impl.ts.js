"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepositoryImpl = void 0;
class AuthRepositoryImpl {
    constructor(authDataSource) {
        this.authDataSource = authDataSource;
    }
    register(registerUserDto) {
        return this.authDataSource.register(registerUserDto);
    }
}
exports.AuthRepositoryImpl = AuthRepositoryImpl;
