import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ContactPageContent from '.'

describe('<ContactPageContent />', () => {
  test('should render the heading', () => {
    renderWithTheme(<ContactPageContent />)

    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
