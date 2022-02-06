import React from 'react'

import * as S from './styles'

export type HeadingsProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Heading = ({ children, size = 'lg' }: HeadingsProps) => (
  <S.Heading size={size}>{children}</S.Heading>
)

export default Heading
