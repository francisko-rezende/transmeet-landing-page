import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  test('should render the header', () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    // expect(screen.getByRole('img', { name: /transmeet/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
