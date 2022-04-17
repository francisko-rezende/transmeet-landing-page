import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import YourBridge from '.'

describe('<YourBridge />', () => {
  test('should render the section with all its elements', () => {
    const { container } = renderWithTheme(<YourBridge />)

    expect(
      screen.getByRole('heading', {
        name: /somos a sua ponte para a transformação!/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /acreditamos que a educação é feita para qualquer pessoa, então criamos através do nosso app e plataforma, pontes para uma educação mais inclusiva\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /em breve no google play/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /em breve na app store/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /um estudante sorrindo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
