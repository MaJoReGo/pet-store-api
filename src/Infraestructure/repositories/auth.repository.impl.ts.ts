import { AuthDataSource, RegisterUserDto, UserEntity } from "../../domain";
import { AuthRepository } from "../../domain/repositories/auth.repository";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly authDataSource: AuthDataSource,
    ) {}

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDataSource.register(registerUserDto);
    }
}
