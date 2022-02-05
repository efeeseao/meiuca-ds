import React from 'react'
import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a heading with a small size', () => {
    render(<Heading size="sm">Button label</Heading>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '20px'
    })
  })

  it('should render a heading with a medium size', () => {
    render(<Heading size="md">Button label</Heading>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '24px'
    })
  })

  it('should render a heading with a large size', () => {
    render(<Heading size="lg">Button label</Heading>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '32px'
    })
  })
})
