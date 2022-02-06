import React from 'react'
import { render, screen } from '@testing-library/react'

import Subtitle from '.'

describe('<Heading />', () => {
  it('should render a subtitle with a small size', () => {
    render(<Subtitle size="sm">Button label</Subtitle>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '20px'
    })
  })

  it('should render a subtitle with a medium size', () => {
    render(<Subtitle size="md">Button label</Subtitle>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '24px'
    })
  })

  it('should render a subtitle with a large size', () => {
    render(<Subtitle size="lg">Button label</Subtitle>)

    expect(screen.getByRole('heading', { name: /button label/i })).toHaveStyle({
      'font-size': '32px'
    })
  })
})
