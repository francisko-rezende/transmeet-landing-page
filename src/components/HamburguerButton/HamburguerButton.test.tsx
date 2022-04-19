import { render, screen } from '@testing-library/react'

import HamburguerButton from '.'

describe('<HamburguerButton />', () => {
  test('should render the humburguer button', () => {
    render(<HamburguerButton />)

    expect(
      screen.getByRole('button', { name: /Abrir menu/i })
    ).toBeInTheDocument()
  })
})
