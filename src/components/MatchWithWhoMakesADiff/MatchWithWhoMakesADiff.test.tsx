import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MatchWithWhoMakesADiff from '.'

describe('<MatchWithWhoMakesADiff />', () => {
  test('should render the section with its different elements properly', () => {
    const { container } = renderWithTheme(<MatchWithWhoMakesADiff />)

    expect(
      screen.getByRole('img', {
        name: /estudante sorridente olhando o celular/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /combine com quem faz a diferença!/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /combine com quem faz a diferença!/i
      })
    ).toHaveStyle({ color: '#152536', fontSize: '5.2rem' })

    expect(
      screen.getByText(
        /através da nossa plataforma é possível encontrar empresas que estão dispostas a patrocinar os estudos da população trans, travesti e não binária em diversas áreas do conhecimento\./i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /através da nossa plataforma é possível encontrar empresas que estão dispostas a patrocinar os estudos da população trans, travesti e não binária em diversas áreas do conhecimento\./i
      )
    ).toHaveStyle({ color: '#68717A', fontSize: '2.1rem' })

    expect(
      screen.getByText(/nada de letrinha pequena\.\.\./i)
    ).toBeInTheDocument()
    expect(screen.getByText(/nada de letrinha pequena\.\.\./i)).toHaveStyle({
      color: '#BB4981',
      fontSize: '1.6rem'
    })

    expect(
      screen.getByText(/escolheu, combinou, estudou!/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/escolheu, combinou, estudou!/i)).toHaveStyle({
      fontWeight: '700',
      color: '#152536'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
