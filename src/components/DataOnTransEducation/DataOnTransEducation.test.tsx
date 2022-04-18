import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DataOnTransEducation from '.'

describe('<DataOnTransEducation />', () => {
  test('should render the heading', () => {
    renderWithTheme(<DataOnTransEducation />)

    expect(
      screen.getByRole('heading', {
        name: /dados rápidos sobre a educação de pessoas transgêneras/i
      })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
