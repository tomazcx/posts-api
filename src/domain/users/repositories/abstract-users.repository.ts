import {CreateUserDto} from "src/application/users/dto/create-user.dto";
import {UpdateUserDto} from "src/application/users/dto/update-user-dto";
import {UserEntity} from "../entities/user.entity";

export abstract class AbstractUserRepository {
	abstract findAll(): Promise<UserEntity[]>
	abstract findById(id: string): Promise<UserEntity | undefined>
	abstract findByEmail(email: string): Promise<UserEntity | undefined>
	abstract exists(id: string): Promise<boolean>
	abstract create(createUserDto: CreateUserDto): Promise<UserEntity>
	abstract update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity | undefined>
	abstract delete(id: string): Promise<void>
}
