import {UpdateUserDto} from "src/application/users/dto/update-user-dto";
import {UserEntity} from "../entities/user.entity";

export abstract class AbstractUpdateUserService {
	abstract execute(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity>
}
