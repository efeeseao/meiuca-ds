import React from 'react'

import * as S from './styles'

export type ShapeProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Shape = ({ children, size = 'sm' }: ShapeProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
)

export default Shape
