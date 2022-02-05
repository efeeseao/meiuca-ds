import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Hello Heading'
  }
} as Meta

export const Basic: Story = (args) => <Heading title={''} {...args} />
Basic.args = {
  title: 'Hello Heading'
}

export const Default: Story = (args) => <Heading title={''} {...args} />
