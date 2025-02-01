import { TodoDto } from '@/api'

export const buildTodo = (
  values: Partial<TodoDto>,
): TodoDto => {
  return {
    id: 0,
    task: '',
    completed: false,
    ...values,
  }
}
