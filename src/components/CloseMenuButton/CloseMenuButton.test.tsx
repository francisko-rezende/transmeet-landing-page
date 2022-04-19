import { render, screen } from '@testing-library/react'

import CloseMenuButton from '.'

describe('<CloseMenuButton />', () => {
  test('should render the heading', () => {
    render(<CloseMenuButton />)

    expect(
      screen.getByRole('button', { name: /fechar menu/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
