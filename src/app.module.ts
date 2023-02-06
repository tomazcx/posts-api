import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './infra/db/prisma.service';
import {UsersModule} from './application/users/modules/users.module';
import {PostsModule} from './application/posts/modules/posts.module';

@Module({
	imports: [ConfigModule.forRoot(), UsersModule, PostsModule],
	providers: [PrismaService]
})
export class AppModule {}
