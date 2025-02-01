import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import '@testing-library/jest-dom'

const mockHomePage = vi.fn()
vi.mock('@pages/home/HomePage.tsx', () => ({
  default: () => {
    mockHomePage()
    return (
      <div>I am Home Page</div>
    )
  },
}))

describe('Appルーティングのテスト', () => {
  test('"/" にアクセスしたとき、ホーム画面が表示される', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('I am Home Page')).toBeInTheDocument()
    expect(mockHomePage).toHaveBeenCalled()
  })
})
