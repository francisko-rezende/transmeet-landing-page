import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ContactForm from '.'

describe('<ContactForm />', () => {
  test('should render the heading', () => {
    renderWithTheme(<ContactForm />)

    expect(
      screen.getByRole('button', { name: /enviar mensagem/i })
    ).toBeInTheDocument()
  })
})
