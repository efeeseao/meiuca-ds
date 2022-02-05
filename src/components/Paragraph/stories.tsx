import React from 'react'
import { Story, Meta } from '@storybook/react'

import Paragraph, { ParagraphProps } from '.'
import { Wrapper } from 'components/Wrapper'

export default {
  title: 'Paragraph',
  component: Paragraph,
  argsTypes: {
    content: {
      type: 'string'
    }
  }
} as Meta<ParagraphProps>

export const Default: Story<ParagraphProps> = (args) => (
  <Wrapper>
    <Paragraph {...args} />
  </Wrapper>
)

Default.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
