import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ManyPossibilities from '.'

describe('<ManyPossibilities />', () => {
  test('should render the component with its ', () => {
    renderWithTheme(<ManyPossibilities />)

    expect(
      screen.getByRole('heading', {
        name: /muitas possibilidades em um só lugar\.\.\./i
      })
    ).toBeInTheDocument()
  })
})
