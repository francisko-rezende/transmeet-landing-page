import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DownloadNow from '.'

describe('<DownloadNow />', () => {
  test('should render the heading', () => {
    renderWithTheme(<DownloadNow />)

    expect(
      screen.getByText(/faça parte desta transformação/i)
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
