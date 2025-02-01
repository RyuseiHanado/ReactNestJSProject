import { Configuration, TodoApi, TodoDto } from '@/api'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const apiConfig = new Configuration({ basePath: API_BASE_URL })
const todoApi = new TodoApi(apiConfig)

export interface TodoRepository {
	getTodos(id: string): Promise<TodoDto[]>
}

export default class NetworkTodoRepository implements TodoRepository {
	async getTodos(): Promise<TodoDto[]> {
		return await todoApi.todoControllerGetTodos()
	}
}
