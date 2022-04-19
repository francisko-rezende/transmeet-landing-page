import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  test('should render the footer with its components properly', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByText(/somos a sua oportunidade/i)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
