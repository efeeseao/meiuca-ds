import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  as?: React.ElementType
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  size?: 'sm' | 'md' | 'lg'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<
  S.ButtonStyledProps,
  ButtonProps
> = (
  { fullWidth = false, minimal = false, size = 'md', icon, children, ...props },
  ref
) => (
  <S.Wrapper
    size={size}
    minimal={minimal}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
