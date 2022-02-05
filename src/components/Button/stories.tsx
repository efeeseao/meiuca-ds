import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Wrapper } from 'components/Wrapper'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argsTypes: {
    label: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    minimal: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      type: ''
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => (
  <Wrapper>
    <Button {...args} />
  </Wrapper>
)

Default.args = {
  children: 'Button label'
}

export const withIcon: Story<ButtonProps> = (args) => (
  <Wrapper>
    <Button {...args} />
  </Wrapper>
)

withIcon.args = {
  children: 'Button label',
  icon: <AddShoppingCart />,
  size: 'small'
}
