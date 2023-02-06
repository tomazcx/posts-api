import {PostEntity} from "../entities/post.entity";

export abstract class AbstractShowPostService {
	abstract execute(id: string): Promise<PostEntity>
}
