import 'reflect-metadata';
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger } from '@nestjs/common'
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })

  // Swagger 設定
  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('Todo管理のためのAPIドキュメント')
    .setVersion('1.0')
    .build()

  // Swagger ドキュメント作成
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/swagger', app, document)

  const PORT = process.env.PORT ?? 3000
  Logger.log(`listen: http://localhost:${PORT}`)
  Logger.log(`swagger api: http://localhost:${PORT}/api/swagger`)
  await app.listen(PORT)
}

void bootstrap()
