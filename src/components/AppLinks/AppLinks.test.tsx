import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AppLinks from '.'

describe('<AppLinks />', () => {
  test('should render links for logging in and registering', () => {
    renderWithTheme(<AppLinks />)

    expect(screen.getByRole('link', { name: /Entre/i })).toBeInTheDocument()
    expect(screen.getByText(/Cadastrar/i)).toBeInTheDocument()
  })
})
