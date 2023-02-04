import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './infra/db/prisma.service';
import {UsersModule} from './application/users/modules/users.module';
import { UsersController } from './application/users/controllers/users.controller';

@Module({
	imports: [ConfigModule.forRoot(), UsersModule],
	providers: [PrismaService],
	controllers: [UsersController],
})
export class AppModule {}
