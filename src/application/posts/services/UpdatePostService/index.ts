import {Injectable} from "@nestjs/common";
import {NotFoundError} from "../../../common/errors/types/NotFoundError";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractUpdatePostService} from "src/domain/posts/services/abstract-update-post.service";
import {PostsRepository} from "src/infra/db/repositories/posts.repository";
import {UpdatePostDto} from "../../dto/update-post.dto";

@Injectable()
export class UpdatePostService implements AbstractUpdatePostService {

	constructor(private readonly postsRepository: PostsRepository) {}

	public async execute(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
		const post = await this.postsRepository.findById(id)

		if (!post) {
			throw new NotFoundError
		}

		const updatedPost = await this.postsRepository.update(id, updatePostDto)
		return updatedPost
	}

}
