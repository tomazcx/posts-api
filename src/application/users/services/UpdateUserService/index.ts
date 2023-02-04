import {Injectable, NotFoundException} from "@nestjs/common";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractUpdateUserService} from "src/domain/users/services/abstract-update-user.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {UpdateUserDto} from "../../dto/update-user-dto";

@Injectable()
export class UpdateUserService implements AbstractUpdateUserService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
		const userExists = await this.usersRepository.exists(id)

		if (!userExists) {
			throw new NotFoundException('User not found')
		}

		const user = await this.usersRepository.update(id, updateUserDto)

		return user
	}

}
