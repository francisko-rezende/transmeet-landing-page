import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NavBar from '.'

describe('<NavBar />', () => {
  test('should render the heading', () => {
    const { container } = renderWithTheme(<NavBar />)

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Aplicativo/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
