import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OurJobCircles from '.'

describe('<OurJobCircles />', () => {
  test('should render the heading', () => {
    renderWithTheme(
      <OurJobCircles
        imgName="circles-03.webp"
        alt="Estudante confiante olhando pra você"
        description="Oferecer oportunidades"
      />
    )

    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })
})
