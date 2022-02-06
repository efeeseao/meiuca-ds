import React from 'react'
import { render, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Button label</Button>)

    expect(screen.getByRole('button', { name: /Button label/i })).toHaveStyle({
      padding: '16px 24px',
      'font-size': '24px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Button label</Button>)

    expect(screen.getByRole('button', { name: /Button label/i })).toHaveStyle({
      padding: '8px 16px',
      'font-size': '20px'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Button label</Button>)

    expect(screen.getByRole('button', { name: /Button label/i })).toHaveStyle({
      'font-size': '32px',
      padding: '16px 32px'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Button label</Button>)

    expect(screen.getByRole('button', { name: /Button label/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        Button label
      </Button>
    )

    expect(screen.getByText(/Button label/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button label
      </Button>
    )

    expect(screen.getByRole('button', { name: /Button label/i })).toHaveStyle({
      background: 'none',
      color: '#ffffff'
    })
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button Label
      </Button>
    )

    expect(screen.getByRole('link', { name: /Button label/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
