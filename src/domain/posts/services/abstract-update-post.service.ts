import {UpdatePostDto} from "src/application/posts/dto/update-post.dto";
import {PostEntity} from "../entities/post.entity";

export abstract class AbstractUpdatePostService {
	abstract execute(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity>
}
