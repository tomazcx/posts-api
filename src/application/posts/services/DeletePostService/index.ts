import {Injectable} from "@nestjs/common";
import {NotFoundError} from "../../../common/errors/types/NotFoundError";
import {AbstractDeletePostService} from "src/domain/posts/services/abstract-delete-post.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";

@Injectable()
export class DeletePostService implements AbstractDeletePostService {

	constructor(private readonly postsRepository: PostsRepository) {}

	public async execute(id: string): Promise<void> {
		const postExists = await this.postsRepository.findById(id)

		if (!postExists) {
			throw new NotFoundError('Post not found')
		}

		return await this.postsRepository.delete(id)
	}
}
