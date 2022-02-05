import React from 'react'
import { Story, Meta } from '@storybook/react'

import Heading, { HeadingsProps } from '.'
import { Wrapper } from 'components/Wrapper'

export default {
  title: 'Heading',
  component: Heading,
  argsTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<HeadingsProps>

export const Default: Story<HeadingsProps> = (args) => (
  <Wrapper>
    <Heading {...args} />
  </Wrapper>
)

Default.args = {
  children: 'Heading'
}
