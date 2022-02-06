import React from 'react'
import { render, screen } from '@testing-library/react'

import { Card } from '.'

const props = {
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Description',
  label: 'Label'
}

describe('<Card />', () => {
  it('should render correctly', () => {
    const { container } = render(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.subtitle })
    ).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()

    expect(screen.getByText(props.label)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
