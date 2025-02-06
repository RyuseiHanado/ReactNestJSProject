import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { writeFileSync } from 'fs'

async function generateSwagger() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  // Swagger JSON をプロジェクトのルートに出力
  writeFileSync('..//swagger.json', JSON.stringify(document, null, 2))

  console.log('✅ Swagger JSON を生成しました: swagger.json')

  await app.close()
}

generateSwagger().catch((err) => {
  console.error('❌ Swagger JSON の生成に失敗しました', err)
  process.exit(1)
})
