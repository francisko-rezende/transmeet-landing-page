import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SimpleSearch from '.'

describe('<SimpleSearch />', () => {
  test('should render the component', () => {
    renderWithTheme(<SimpleSearch />)

    expect(
      screen.getByRole('heading', {
        name: /veja as oportunidades disponíveis realize um busca simples/i
      })
    ).toBeInTheDocument()
  })
})
