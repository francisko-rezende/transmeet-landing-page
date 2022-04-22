import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MobileMenu from '.'

describe('<MobileMenu />', () => {
  test('it should render the menu', () => {
    renderWithTheme(<MobileMenu />)

    expect(
      screen.getByRole('button', { name: /Abrir menu/i })
    ).toBeInTheDocument()
  })

  test('that the menu opens and closes', () => {
    renderWithTheme(<MobileMenu />)
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByRole('button', { name: /Abrir menu/i }))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByRole('button', { name: /fechar menu/i }))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
