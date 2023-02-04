import {UserEntity} from "../entities/user.entity";

export abstract class AbstractShowAllUsersService {
	abstract execute(): Promise<UserEntity[]>
}
