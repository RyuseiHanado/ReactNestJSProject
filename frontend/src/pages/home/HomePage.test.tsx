import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from './HomePage.tsx'

describe('HomePage', () => {
  test('ページタイトルを表示する', () => {
    render(
      <HomePage />
    )

    expect(screen.getByText('ホーム')).toBeInTheDocument()
  })
})