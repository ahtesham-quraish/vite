// src/App.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App Component', () => {
  it('renders logos and heading', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')

    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')

    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 2')
  })
})
