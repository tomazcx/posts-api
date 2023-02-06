import {ApiProperty} from "@nestjs/swagger"
import {IsBoolean, IsEmail, IsNotEmpty, IsString} from "class-validator"

export class CreateUserDto {

	@ApiProperty({
		description: 'Email do usuário'
	})
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty({
		description: 'Nome completo do usuário'
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		description: 'Define se o usuário é um admnistrador',
		default: false
	})
	@IsBoolean()
	admin: boolean
}
