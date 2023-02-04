import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "src/application/users/dto/create-user.dto";
import {UpdateUserDto} from "src/application/users/dto/update-user-dto";
import {UserEntity} from "src/domain/users/entities/user.entity";
import {AbstractUserRepository} from "src/domain/users/repositories/abstract-users.repository";
import {PrismaService} from "../prisma.service";

@Injectable()
export class UsersRepository implements AbstractUserRepository {

	constructor(private readonly prisma: PrismaService) {}

	public async findAll(): Promise<UserEntity[]> {
		const users = await this.prisma.user.findMany()
		return users
	}

	public async findById(id: string): Promise<UserEntity | undefined> {
		const user = await this.prisma.user.findFirst({where: {id}})
		return user
	}

	public async exists(id: string): Promise<boolean> {
		const user = await this.prisma.user.findFirst({where: {id}})
		return !!user
	}

	public async findByEmail(email: string): Promise<UserEntity> {
		const user = await this.prisma.user.findFirst({where: {email}})
		return user
	}

	public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
		const user = await this.prisma.user.create({
			data: createUserDto
		})

		return user
	}

	public async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
		const user = await this.prisma.user.update({
			where: {id},
			data: updateUserDto
		})

		return user
	}

	public async delete(id: string): Promise<void> {
		await this.prisma.user.delete({where: {id}})
		return
	}
}
