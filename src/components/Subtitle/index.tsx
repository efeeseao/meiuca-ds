import React from 'react'

import * as S from './styles'

export type SubtitleProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Subtitle = ({ children, size = 'md' }: SubtitleProps) => (
  <S.Subtitle size={size}>{children}</S.Subtitle>
)

export default Subtitle
