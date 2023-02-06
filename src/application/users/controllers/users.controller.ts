import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from '../dto/create-user.dto';
import {UpdateUserDto} from '../dto/update-user-dto';
import {CreateUserService} from '../services/CreateUserService';
import {DeleteUserService} from '../services/DeleteUserService';
import {ShowAllUsersService} from '../services/ShowAllUsersService';
import {ShowUserService} from '../services/ShowUserService';
import {UpdateUserService} from '../services/UpdateUserService';

@ApiTags('Users')
@Controller('users')
export class UsersController {

	constructor(
		private readonly showAllUsersService: ShowAllUsersService,
		private readonly showUserService: ShowUserService,
		private readonly createUserService: CreateUserService,
		private readonly updateUserService: UpdateUserService,
		private readonly deleteUserService: DeleteUserService
	) {}


	@Get('/all')
	@HttpCode(HttpStatus.OK)
	async findAll() {
		return this.showAllUsersService.execute()
	}

	@Get("/:id")
	@HttpCode(HttpStatus.OK)
	async findOne(@Param('id') id: string) {
		return this.showUserService.execute(id)
	}

	@ApiResponse({
		status: 409,
		description: 'Conflito de email'
	})
	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() createUserDto: CreateUserDto) {
		return this.createUserService.execute(createUserDto)
	}

	@Put('/:id')
	@HttpCode(HttpStatus.OK)
	async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.updateUserService.execute(id, updateUserDto)
	}

	@Delete('/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async delete(@Param('id') id: string) {
		return this.deleteUserService.execute(id)
	}

}
