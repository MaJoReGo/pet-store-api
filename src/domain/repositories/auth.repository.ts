import { UserEntity } from "../entities/auth/user.entity";
import { RegisterUserDto } from '../dto/auth/register-user.dto';


export abstract class AuthRepository { 
    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity>
} 