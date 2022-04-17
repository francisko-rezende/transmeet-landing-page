import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardRing from '.'

describe('<CardRing />', () => {
  test('should render the heading', () => {
    renderWithTheme(<CardRing stepNumber="1" ringType="blueRight" />)

    expect(screen.getByRole('heading', { name: /1/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
