import {Injectable} from "@nestjs/common";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractShowAllPostsFromAuthorService} from "src/domain/posts/services/abstract-show-all-posts-from-author.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";
import {UsersRepository} from "src/infra/db/repositories/users.repository";
import {NotFoundError} from "../../../common/errors/types/NotFoundError";

@Injectable()
export class ShowAllPostsFromAuthorService implements AbstractShowAllPostsFromAuthorService {

	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly postsRepository: PostsRepository
	) {}

	public async execute(authorId: string): Promise<PostEntity[]> {
		const authorExists = await this.usersRepository.exists(authorId)

		if (!authorExists) {
			throw new NotFoundError('User not found')
		}

		const posts = await this.postsRepository.findAllFromAuthor(authorId)
		return posts
	}
}
