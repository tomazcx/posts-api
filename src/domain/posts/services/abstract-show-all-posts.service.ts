import {PostEntity} from "../entities/post.entity";

export abstract class AbstractShowAllPostsService {
	abstract execute(): Promise<PostEntity[]>
}
