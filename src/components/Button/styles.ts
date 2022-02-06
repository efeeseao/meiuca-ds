import styled, { css } from 'styled-components'

import {
  border,
  radius,
  font,
  palette,
  spacing,
  spacingSquish
} from 'styles/theme'

import { ButtonProps } from '.'

export type ButtonStyledProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  sm: () => css`
    font-size: ${font.size.xs};
    padding: ${spacingSquish.size.nano.stack};
  `,

  md: () => css`
    font-size: ${font.size.sm};
    padding: ${spacingSquish.size.xs.stack};
  `,

  minimal: () => css`
    background: none;
    color: ${palette.color.neutral[1]};

    &:hover {
      color: ${palette.color.primary[3]};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,

  lg: () => css`
    font-size: ${font.size.lg};
    padding: ${spacingSquish.size.sm.stack};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${spacing.size.quarck};
      }
    }
  `
}

export const Wrapper = styled.button<ButtonStyledProps>`
  ${({ size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${palette.color.primary[3]};
    color: ${palette.color.neutral[1]};
    font-family: ${font.family.highlight};
    border: ${radius.size.none};
    cursor: pointer;
    border-radius: ${border.size.none};
    padding: ${spacingSquish.size.xs};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${minimal ? 'none' : `${palette.color.primary[4]}`};
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${!!minimal && wrapperModifiers.minimal()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
