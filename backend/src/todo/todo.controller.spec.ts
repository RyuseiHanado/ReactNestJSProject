import { Test, TestingModule } from '@nestjs/testing'
import { TodoController } from './todo.controller'
import { TodoDto } from './dto/todo.dto'

describe('TodoController', () => {
  let todoController: TodoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
    }).compile()

    todoController = module.get<TodoController>(TodoController)
  })

  test('getTodos() は Todo のリストを返す', () => {
    const expectedTodos: TodoDto[] = [
      { id: 1, task: 'Buy groceries', completed: false },
      { id: 2, task: 'Write NestJS API', completed: true },
    ]

    expect(todoController.getTodos()).toEqual(expectedTodos)
  })
})
