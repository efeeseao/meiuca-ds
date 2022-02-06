import React from 'react'

import * as S from './styles'

export type ParagraphProps = {
  children: React.ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
  <S.Description>{children}</S.Description>
)

export default Paragraph
