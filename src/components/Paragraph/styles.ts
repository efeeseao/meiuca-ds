import styled, { css } from 'styled-components'

import { font, line, palette } from 'styles/theme'

export const Description = styled.p`
  ${() => css`
    color: ${palette.color.neutral[4]};
    font-family: ${font.family.highlight};
    fon-size: ${font.size.xs};
    font-weight: ${font.weight.regular};
    height: 12rem;
    line-height: ${line.height.distant};
    width: 26rem;
  `}
`
