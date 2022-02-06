import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Card, CardProps } from '.'
import { Wrapper } from 'components/Wrapper'

export default {
  title: 'Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'gray'
    }
  },
  args: {
    title: 'Heading SM',
    subtitle: 'Subtitle SM',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    label: 'Button label'
  }
} as Meta<CardProps>

export const Default: Story<CardProps> = (args) => (
  <Wrapper>
    <Card {...args} />
  </Wrapper>
)
