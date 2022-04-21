import { render, screen } from '@testing-library/react'

import ContactForm from '.'

describe('<ContactForm />', () => {
  test('should render the heading', () => {
    const { container } = render(<ContactForm />)

    expect(
      screen.getByRole('heading', { name: /ContactForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})