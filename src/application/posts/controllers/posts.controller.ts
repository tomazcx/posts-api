import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {CreatePostDto} from '../dto/create-post.dto';
import {UpdatePostDto} from '../dto/update-post.dto';
import {CreatePostService} from '../services/CreatePostService';
import {DeletePostService} from '../services/DeletePostService';
import {ShowAllPostsFromAuthorService} from '../services/ShowAllPostsFromAuthorService';
import {ShowAllPostsService} from '../services/ShowAllPostsService';
import {ShowPostService} from '../services/ShowPostService';
import {UpdatePostService} from '../services/UpdatePostService';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {

	constructor(
		private readonly showAllPostsService: ShowAllPostsService,
		private readonly showAllPostsFromAuthorService: ShowAllPostsFromAuthorService,
		private readonly showPostService: ShowPostService,
		private readonly createPostService: CreatePostService,
		private readonly updatePostService: UpdatePostService,
		private readonly deletePostService: DeletePostService
	) {}

	@Get('/all')
	@HttpCode(HttpStatus.OK)
	async findAll() {
		return this.showAllPostsService.execute()
	}

	@Get('/all/:authorId')
	@HttpCode(HttpStatus.OK)
	async findAllFromAuthor(@Param('authorId') authorId: string) {
		return this.showAllPostsFromAuthorService.execute(authorId)
	}

	@Get('/:id')
	@HttpCode(HttpStatus.OK)
	async findOne(@Param('id') id: string) {
		return this.showPostService.execute(id)
	}

	@Post('/:authorId')
	@HttpCode(HttpStatus.CREATED)
	async create(@Param('authorId') authorId: string, @Body() createPostDto: CreatePostDto) {
		return this.createPostService.execute(authorId, createPostDto)
	}

	@Put('/:id')
	@HttpCode(HttpStatus.OK)
	async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
		return this.updatePostService.execute(id, updatePostDto)
	}

	@Delete('/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async delete(@Param('id') id: string) {
		return this.deletePostService.execute(id)
	}

}
