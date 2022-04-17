import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PartnerCompanies from '.'

describe('<PartnerCompanies />', () => {
  test('should render the partner logos correctly', () => {
    const { container } = renderWithTheme(<PartnerCompanies />)

    expect(
      screen.getByRole('heading', {
        name: /- conheça alguns dos nossos parceiros -/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /alpagartas/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /google/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /pitágoras/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /raízen/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /santander/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /ioasys/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
