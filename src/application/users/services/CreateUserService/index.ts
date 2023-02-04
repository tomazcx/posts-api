import {Injectable, UnprocessableEntityException} from "@nestjs/common";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractCreateUserService} from "src/domain/users/services/abstract-create-user.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {CreateUserDto} from "../../dto/create-user.dto";

@Injectable()
export class CreateUserService implements AbstractCreateUserService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(createUserDto: CreateUserDto): Promise<UserEntity> {

		const emailIsRegistered = await this.usersRepository.findByEmail(createUserDto.email)

		if (emailIsRegistered) {
			throw new UnprocessableEntityException("Email already registered")
		}

		const user = await this.usersRepository.create(createUserDto)
		return user
	}
}
