import styled, { css } from 'styled-components'

import { ShapeProps } from '.'

import { border, spacing, palette } from 'styles/theme'

export const wrapperModifiers = {
  sm: () => css`
    padding: ${spacing.size.lg};
  `,
  md: () => css`
    padding: ${spacing.size.xxl};
  `,
  lg: () => css`
    padding: ${spacing.size.xxxl};
  `
}

export const Wrapper = styled.div<ShapeProps>`
  ${({ size }) => css`
    background-color: ${palette.color.neutral[5]};
    border-color: ${palette.color.neutral[4]};
    border-radius: ${border.size.none};
    border-width: ${border.size.thin};
    color: ${palette.color.neutral[2]};

    ${!!size && wrapperModifiers[size]()}
  `}
`
