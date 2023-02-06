import {Injectable} from "@nestjs/common";
import {NotFoundError} from "../../../common/errors/types/NotFoundError";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractCreatePostService} from "src/domain/posts/services/abstract-create-post.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {CreatePostDto} from "../../dto/create-post.dto";

@Injectable()
export class CreatePostService implements AbstractCreatePostService {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly postsRepository: PostsRepository
	) {}

	public async execute(authorId: string, createPostDto: CreatePostDto): Promise<PostEntity> {
		const authorExists = await this.usersRepository.exists(authorId)

		if (!authorExists) {
			throw new NotFoundError('User is not registered')
		}

		const post = await this.postsRepository.create(authorId, createPostDto)
		return post
	}
}
