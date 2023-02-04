import {CreateUserDto} from "src/application/users/dto/create-user.dto";
import {UserEntity} from "../entities/user.entity";

export abstract class AbstractCreateUserService {
	abstract execute(createUserDto: CreateUserDto): Promise<UserEntity>
}
