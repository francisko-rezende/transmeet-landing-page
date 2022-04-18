import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DataCard from '.'

describe('<DataCard />', () => {
  test('should render the heading', () => {
    renderWithTheme(
      <DataCard
        percentage="72"
        explanation="Não possui ensino Médio e 56% o Fundamental"
      />
    )

    expect(screen.getByRole('listitem')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
