import styled, { css } from 'styled-components'

import { SubtitleProps } from '.'

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

export const Subtitle = styled.h2<SubtitleProps>`
  ${({ size }) => css`
    color: ${palette.color.neutral[4]};
    font-family: ${font.family.highlight};
    font-weight: ${font.weight.medium};
    line-height: ${line.height.medium};

    ${!!size && wrapperModifiers[size]()}
  `}
`
