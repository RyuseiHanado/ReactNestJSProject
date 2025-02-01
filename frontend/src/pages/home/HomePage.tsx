import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { TodoDto } from '@/api'
import NetworkTodoRepository from '@repository/NetworkTodoRepository.ts'

export default function HomePage() {
  const [todos, setTodos] = useState<TodoDto[]>([])

  const getTodos = async () => {
    const todoRepository = new NetworkTodoRepository()
    try {
      const res = await todoRepository.getTodos()
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
        {todos && todos.length > 0 ? (
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
