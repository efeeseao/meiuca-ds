import React from 'react'

import * as S from './styles'

export type ShapeProps = {
  children: React.ReactNode
}

const Shape = ({ children }) => <S.Wrapper>{children}</S.Wrapper>

export default Shape
