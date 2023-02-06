import {CreatePostDto} from "src/application/posts/dto/create-post.dto";
import {UpdatePostDto} from "src/application/posts/dto/update-post.dto";
import {PostEntity} from "../entities/post.entity";

export abstract class AbstractPostsRepository {
	abstract findAll(): Promise<PostEntity[]>
	abstract findAllFromAuthor(authorId: string): Promise<PostEntity[]>
	abstract findById(id: string): Promise<PostEntity>
	abstract create(authorId: string, createPostDto: CreatePostDto): Promise<PostEntity>
	abstract update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity>
	abstract delete(id: string): Promise<void>
}
