import {CreatePostDto} from "src/application/posts/dto/create-post.dto";
import {PostEntity} from "../entities/post.entity";

export abstract class AbstractCreatePostService {
	abstract execute(authorId: string, createPostDto: CreatePostDto): Promise<PostEntity>
}
