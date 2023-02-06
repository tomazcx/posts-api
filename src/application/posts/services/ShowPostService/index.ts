import {Injectable} from "@nestjs/common";
import {NotFoundError} from "../../../common/errors/types/NotFoundError";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractShowPostService} from "src/domain/posts/services/abstract-show-post.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";

@Injectable()
export class ShowPostService implements AbstractShowPostService {

	constructor(private readonly postsRepository: PostsRepository) {}

	public async execute(id: string): Promise<PostEntity> {

		console.log(id)

		const post = await this.postsRepository.findById(id)

		if (!post) {
			throw new NotFoundError('Post not found')
		}

		return post
	}
}
