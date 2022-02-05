import React from 'react'
import { render, screen } from '@testing-library/react'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const title = 'Hello Heading'

    render(<Heading title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
