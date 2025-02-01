import { describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import HomePage from './HomePage.tsx'
import { act } from 'react'
import { buildTodo } from '@test/builder/buildTodo.ts'

const mockGetTodos = vi.fn()
vi.mock('@repository/NetworkTodoRepository', async (importOriginal) => {
  const original = await importOriginal<typeof import('@repository/NetworkTodoRepository')>()

  class MockNetworkTodoRepository extends original.default {
    getTodos = mockGetTodos
  }
  return {
    default: MockNetworkTodoRepository,
  }
})

describe('HomePage', () => {
  test('ページタイトルを表示する', async() => {
    await act(async() => {render(<HomePage />)})

    expect(screen.getByText('ホーム')).toBeInTheDocument()
  })

  test('初回レンダリング時に「データがありません」と表示される', async () => {
    mockGetTodos.mockReset()
    await act(async() => {render(<HomePage />)})

    expect(screen.getByText('データがありません')).toBeInTheDocument()
  })

  test('API のデータが表示される', async () => {
    const returnValue = [
      buildTodo({id: 1, task: 'task 1', completed: false}),
      buildTodo({id: 2, task: 'task 2', completed: true})
    ]
    mockGetTodos.mockResolvedValue(Promise.resolve(returnValue))
    render(<HomePage />)

    await waitFor(() => expect(mockGetTodos).toHaveBeenCalled())

    await waitFor(() => {
      expect(screen.getByText(/task 1/i)).toBeInTheDocument()
      expect(screen.getByText(/task 2/i)).toBeInTheDocument()
    })
  })
})