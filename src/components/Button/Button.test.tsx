import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  test('should render the button with styles', () => {
    renderWithTheme(<Button>Cadastrar</Button>)

    expect(screen.getByText(/cadastrar/i)).toBeInTheDocument()
    expect(screen.getByText(/cadastrar/i)).toHaveStyle({
      backgroundColor: '#BB4981'
    })
    expect(screen.getByText(/cadastrar/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })
})
