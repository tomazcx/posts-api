import {Injectable} from "@nestjs/common";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractUpdateUserService} from "src/domain/users/services/abstract-update-user.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {UpdateUserDto} from "../../dto/update-user-dto";
import {NotFoundError} from "src/application/common/errors/types/NotFoundError";
import {ConflictError} from "src/application/common/errors/types/ConflictError";

@Injectable()
export class UpdateUserService implements AbstractUpdateUserService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
		const userExists = await this.usersRepository.findById(id)

		if (!userExists) {
			throw new NotFoundError('User not found')
		}

		const emailIsRegisted = await this.usersRepository.findByEmail(updateUserDto.email)

		console.log(userExists)
		console.log(emailIsRegisted)

		if (emailIsRegisted && emailIsRegisted.id !== userExists.id) {
			throw new ConflictError('Email already registered')
		}

		const user = await this.usersRepository.update(id, updateUserDto)

		return user
	}

}
