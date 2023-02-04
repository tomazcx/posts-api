export abstract class AbstractDeleteUserService {
	abstract execute(id: string): Promise<void>
}
