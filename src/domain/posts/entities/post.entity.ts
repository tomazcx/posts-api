import {Post} from "@prisma/client";

export class PostEntity implements Post {
	id: string
	title: string
	content: string
	authorId: string
	created_at: Date;
	published: boolean;
}
