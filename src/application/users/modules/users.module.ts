import {Module} from '@nestjs/common';
import {PrismaService} from 'src/infra/db/prisma.service';
import {UsersRepository} from 'src/infra/db/repositories/users.repository';
import {UsersController} from '../controllers/users.controller';
import {CreateUserService} from '../services/CreateUserService';
import {DeleteUserService} from '../services/DeleteUserService';
import {ShowAllUsersService} from '../services/ShowAllUsersService';
import {ShowUserService} from '../services/ShowUserService';
import {UpdateUserService} from '../services/UpdateUserService';

@Module({
	providers: [CreateUserService, ShowAllUsersService, ShowUserService, UpdateUserService, DeleteUserService, UsersRepository, PrismaService],
	controllers: [UsersController]
})
export class UsersModule {}
