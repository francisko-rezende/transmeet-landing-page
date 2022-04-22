import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  test('should render the heading', () => {
    renderWithTheme(<Input label="Email" />)

    expect(screen.getByText('Email')).toBeInTheDocument()
  })
})
