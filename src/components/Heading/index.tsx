import React from 'react'

import * as S from './styles'

export type HeadingsProps = {
  title: string
}

export const Heading = ({ title }: HeadingsProps) => (
  <S.Heading>{title}</S.Heading>
)
