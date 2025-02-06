"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
async function generateSwagger() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Documentation')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    (0, fs_1.writeFileSync)('..//swagger.json', JSON.stringify(document, null, 2));
    console.log('✅ Swagger JSON を生成しました: swagger.json');
    await app.close();
}
generateSwagger().catch((err) => {
    console.error('❌ Swagger JSON の生成に失敗しました', err);
    process.exit(1);
});
//# sourceMappingURL=generate-swagger.js.map