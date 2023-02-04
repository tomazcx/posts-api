import {Injectable, NotFoundException} from "@nestjs/common";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractShowUserService} from "src/domain/users/services/abstract-show-user.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";

@Injectable()
export class ShowUserService implements AbstractShowUserService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(id: string): Promise<UserEntity> {
		const user = await this.usersRepository.findById(id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}
}
