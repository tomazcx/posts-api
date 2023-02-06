export abstract class AbstractDeletePostService {
	abstract execute(id: string): Promise<void>
}
