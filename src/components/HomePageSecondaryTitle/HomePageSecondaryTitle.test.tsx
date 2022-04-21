import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomePageSecondaryTitle from '.'

describe('<HomePageSecondaryTitle />', () => {
  test('should render the secondary title', () => {
    renderWithTheme(
      <HomePageSecondaryTitle
        title="Este é o nosso trabalho"
        span="Nós somos a Transmeet"
      />
    )

    expect(
      screen.getByRole('heading', {
        name: /nós somos a transmeet este é o nosso trabalho/i
      })
    ).toBeInTheDocument()
  })
})
