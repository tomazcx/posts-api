import {Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException} from '@nestjs/common';
import {Observable} from 'rxjs';
import {NotFoundError} from '../types/NotFoundError';
import {catchError} from 'rxjs/operators';


@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle()
			.pipe(
				catchError(error => {
					if (error instanceof NotFoundError) {
						throw new NotFoundException(error.message)
					} else {
						throw error
					}
				})
			);
	}
}

