import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AboutPageContent from '.'

describe('<AboutPageContent />', () => {
  test('should render the heading', () => {
    renderWithTheme(<AboutPageContent />)

    expect(
      screen.getByRole('heading', { name: /sobre a transmeet/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
