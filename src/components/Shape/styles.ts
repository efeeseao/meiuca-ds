import styled, { css } from 'styled-components'

import { border, spacing, palette } from 'styles/theme'

export const Wrapper = styled.div`
  ${() => css`
    background-color: ${palette.color.neutral[5]};
    border-color: ${palette.color.neutral[4]};
    border-radius: ${border.size.none};
    border-width: ${border.size.thin};
    color: ${palette.color.neutral[2]};
    padding: ${spacing.size.lg};
  `}
`
