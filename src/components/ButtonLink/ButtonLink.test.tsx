import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ButtonLink from '.'

describe('<Button />', () => {
  test('should render the button with styles', () => {
    renderWithTheme(<ButtonLink>Cadastrar</ButtonLink>)

    expect(screen.getByText(/cadastrar/i)).toBeInTheDocument()
    expect(screen.getByText(/cadastrar/i)).toHaveStyle({
      backgroundColor: '#BB4981'
    })
    expect(screen.getByText(/cadastrar/i)).toHaveStyle({
      color: '#FFFFFF'
    })
  })
})
