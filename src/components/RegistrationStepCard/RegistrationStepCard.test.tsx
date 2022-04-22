import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RegistrationStepCard from '.'

describe('<RegistrationStepCard />', () => {
  test('should render the heading', () => {
    renderWithTheme(
      <RegistrationStepCard
        stepNumber="1"
        ringType="blueRight"
        stepTitle="Escolha uma empresa"
        stepDescription="Pesquise uma ou busque uma empresa em nossa lista de parceiros"
      />
    )

    expect(
      screen.getByText(
        /Pesquise uma ou busque uma empresa em nossa lista de parceiros/i
      )
    ).toBeInTheDocument()
  })
})
