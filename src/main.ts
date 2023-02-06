import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ConflictInterceptor} from './application/common/errors/interceptors/conflict.interceptor';
import {NotFoundInterceptor} from './application/common/errors/interceptors/not-found.interceptor';
import {HttpExceptionFilter} from './application/common/filters/http-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe(
		{
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true
		}
	))


	const config = new DocumentBuilder()
		.setTitle('Posts API RESTful')
		.setDescription('The Posts API description')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	app.useGlobalFilters(new HttpExceptionFilter())
	app.useGlobalInterceptors(new ConflictInterceptor())
	app.useGlobalInterceptors(new NotFoundInterceptor())
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
