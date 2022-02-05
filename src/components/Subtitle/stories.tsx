import React from 'react'
import { Story, Meta } from '@storybook/react'

import Subtitle, { SubtitleProps } from '.'
import { Wrapper } from 'components/Wrapper'

export default {
  title: 'Subtitle',
  component: Subtitle,
  argsTypes: {
    content: {
      type: 'string'
    }
  }
} as Meta<SubtitleProps>

export const Default: Story<SubtitleProps> = (args) => (
  <Wrapper>
    <Subtitle {...args} />
  </Wrapper>
)

Default.args = {
  children: 'Subtile'
}
