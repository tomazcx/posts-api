import {PostEntity} from "../entities/post.entity";

export abstract class AbstractShowAllPostsFromAuthorService {
	abstract execute(authorId: string): Promise<PostEntity[]>
}
