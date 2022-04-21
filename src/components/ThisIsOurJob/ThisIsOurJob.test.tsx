import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ThisIsOurJob from '.'

describe('<ThisIsOurJob />', () => {
  test('should render the section properly', () => {
    renderWithTheme(<ThisIsOurJob />)

    expect(
      screen.getByRole('heading', {
        name: /nós somos a transmeet este é o nosso trabalho/i
      })
    ).toBeInTheDocument()
  })
})
