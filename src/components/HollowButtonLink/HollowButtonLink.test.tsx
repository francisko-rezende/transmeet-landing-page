import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HollowButtonLink from '.'

describe('<HollowButtonLink />', () => {
  test('should render the button', () => {
    renderWithTheme(
      <HollowButtonLink
        href="/about"
        label="Conheça melhor a Transmeet"
        color="pink"
      />
    )

    expect(
      screen.getByRole('link', { name: /conheça melhor a transmeet/i })
    ).toBeInTheDocument()
  })
})
