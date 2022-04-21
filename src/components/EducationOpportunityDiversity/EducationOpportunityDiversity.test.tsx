import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import EducationOpportunityDiversity from '.'

describe('<EducationOpportunityDiversity />', () => {
  test('should render the heading', () => {
    renderWithTheme(<EducationOpportunityDiversity />)

    expect(
      screen.getByRole('heading', {
        name: /Educação, oportunidade, diversidade!/i
      })
    ).toBeInTheDocument()
  })
})
