import {Injectable} from "@nestjs/common";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractShowAllUsersService} from "src/domain/users/services/abstract-show-all-users.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";

@Injectable()
export class ShowAllUsersService implements AbstractShowAllUsersService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(): Promise<UserEntity[]> {
		const users = await this.usersRepository.findAll()
		return users
	}
}
