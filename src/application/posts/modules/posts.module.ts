import {Module} from '@nestjs/common';
import {PrismaService} from 'src/infra/db/prisma.service';
import {PostsRepository} from 'src/infra/db/repositories/posts.repository';
import {UsersRepository} from 'src/infra/db/repositories/users.repository';
import {PostsController} from '../controllers/posts.controller';
import {CreatePostService} from '../services/CreatePostService';
import {DeletePostService} from '../services/DeletePostService';
import {ShowAllPostsFromAuthorService} from '../services/ShowAllPostsFromAuthorService';
import {ShowAllPostsService} from '../services/ShowAllPostsService';
import {ShowPostService} from '../services/ShowPostService';
import {UpdatePostService} from '../services/UpdatePostService';

@Module({
	controllers: [PostsController],
	providers: [ShowAllPostsService, ShowAllPostsFromAuthorService, ShowPostService, CreatePostService, UpdatePostService, DeletePostService, PrismaService, PostsRepository, UsersRepository]
})
export class PostsModule {}
