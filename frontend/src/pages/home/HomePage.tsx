import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Configuration, TodoApi, TodoDto } from '@/api'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const apiConfig = new Configuration({ basePath: API_BASE_URL })
const todoApi = new TodoApi(apiConfig)

export default function HomePage() {
  const [todos, setTodos] = useState<TodoDto[]>([])

  const getTodos = async () => {
    try {
      const res = await todoApi.todoControllerGetTodos()
      setTodos(res)
    } catch (error) {
      console.error('エラー:', error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', p: 4 }}>
      <Typography variant="h4" component="h1">
        ホーム
      </Typography>

      <Box sx={{ mt: 2 }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Typography key={todo.id}>
              {todo.completed ? '✅' : '❌'} {todo.task}
            </Typography>
          ))
        ) : (
          <Typography>データがありません</Typography>
        )}
      </Box>
    </Box>
  )
}
