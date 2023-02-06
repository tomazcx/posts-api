import {Injectable} from "@nestjs/common";
import {AbstractDeleteUserService} from "src/domain/users/services/abstract-delete-user.service";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {NotFoundError} from "src/application/common/errors/types/NotFoundError";

@Injectable()
export class DeleteUserService implements AbstractDeleteUserService {

	constructor(private readonly usersRepository: UsersRepository) {}

	public async execute(id: string): Promise<void> {

		const userExists = await this.usersRepository.exists(id)

		if (!userExists) {
			throw new NotFoundError("Id not found")
		}

		return await this.usersRepository.delete(id)

	}
}

