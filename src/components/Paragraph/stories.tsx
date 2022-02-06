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
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
}
