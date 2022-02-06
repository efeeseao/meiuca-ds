import styled, { css } from 'styled-components'

import { HeadingsProps } from '.'
import { font, line, palette } from 'styles/theme'

export const wrapperModifiers = {
  sm: () => css`
    font-size: ${font.size.sm};
  `,
  md: () => css`
    font-size: ${font.size.md};
  `,
  lg: () => css`
    font-size: ${font.size.lg};
  `
}

export const Heading = styled.h1<HeadingsProps>`
  ${({ size }) => css`
    color: ${palette.color.neutral[5]};
    font-family: ${font.family.highlight};
    font-weight: ${font.weight.bold};
    line-height: ${line.height.distant};

    ${!!size && wrapperModifiers[size]()}
  `}
`
