import {Injectable} from "@nestjs/common";
import {CreatePostDto} from "src/application/posts/dto/create-post.dto";
import {UpdatePostDto} from "src/application/posts/dto/update-post.dto";
import {PostEntity} from "src/domain/posts/entities/post.entity";
import {AbstractPostsRepository} from "src/domain/posts/repositories/abstract-posts.repository";
import {PrismaService} from "../prisma.service";

@Injectable()
export class PostsRepository implements AbstractPostsRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async findAll(): Promise<PostEntity[]> {
		const posts = await this.prisma.post.findMany()
		return posts
	}

	public async findAllFromAuthor(authorId: string): Promise<PostEntity[]> {
		const posts = await this.prisma.post.findMany({where: {authorId}, include: {author: true}})
		return posts
	}

	public async findById(id: string): Promise<PostEntity> {
		const post = await this.prisma.post.findFirst({where: {id}, include: {author: true}})
		return post
	}

	public async create(authorId: string, createPostDto: CreatePostDto): Promise<PostEntity> {
		const post = await this.prisma.post.create({
			data: {
				authorId,
				...createPostDto
			},
			include: {
				author: true
			}
		})

		return post
	}

	public async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
		const post = await this.prisma.post.update({
			where: {id},
			data: updatePostDto,
			include: {
				author: true
			}
		})

		return post
	}

	public async delete(id: string): Promise<void> {
		await this.prisma.post.delete({where: {id}})
		return
	}
}
