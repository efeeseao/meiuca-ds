import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Wrapper } from 'components/Wrapper'
import Shape, { ShapeProps } from '.'

export default {
  title: 'Shape',
  component: Shape,
  argsTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<ShapeProps>

export const Default: Story<ShapeProps> = (args) => (
  <Wrapper>
    <Shape {...args} />
  </Wrapper>
)

Default.args = {
  children: ''
}
