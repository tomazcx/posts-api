import {UserEntity} from "../entities/user.entity";

export abstract class AbstractShowUserService {
	abstract execute(id: string): Promise<UserEntity>
}
