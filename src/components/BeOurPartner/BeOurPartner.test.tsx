import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BeOurPartner from '.'

describe('<BeOurPartner />', () => {
  test('should render the heading', () => {
    renderWithTheme(<BeOurPartner />)

    expect(screen.getByText(/crie novas oportunidades!/i)).toBeInTheDocument()
  })
})
