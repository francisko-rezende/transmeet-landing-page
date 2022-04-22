import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RegistrationSteps from '.'

describe('<RegistrationSteps />', () => {
  test('should render the heading', () => {
    renderWithTheme(<RegistrationSteps />)

    expect(
      screen.getByRole('heading', {
        name: /veja como funciona o processo muito simples se candidatar/i
      })
    ).toBeInTheDocument()
  })
})
