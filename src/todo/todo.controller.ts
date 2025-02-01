import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { TodoDto } from './dto/todo.dto'

@ApiTags('todo') // Swagger のタグを設定
@Controller('todo')
export class TodoController {
  @Get()
  @ApiResponse({ status: 200, type: [TodoDto] })
  getTodos(): TodoDto[] {
    return [
      { id: 1, task: 'Buy groceries', completed: false },
      { id: 2, task: 'Write NestJS API', completed: true },
    ]
  }
}