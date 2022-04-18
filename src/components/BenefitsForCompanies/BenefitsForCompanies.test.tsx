import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BenefitsForCompanies from '.'

describe('<BenefitsForCompanies />', () => {
  test('should render the component and its elements properly', () => {
    renderWithTheme(<BenefitsForCompanies />)

    expect(
      screen.getByRole('heading', {
        name: /o que as empresas ganham com isso\?/i
      })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
