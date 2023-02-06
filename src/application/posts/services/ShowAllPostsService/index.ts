import {Injectable} from "@nestjs/common";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractShowAllPostsService} from "src/domain/posts/services/abstract-show-all-posts.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";

@Injectable()
export class ShowAllPostsService implements AbstractShowAllPostsService {

	constructor(private readonly postsRepository: PostsRepository) {}

	public async execute(): Promise<PostEntity[]> {
		const posts = await this.postsRepository.findAll()
		return posts
	}
}
