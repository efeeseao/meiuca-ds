import React from 'react'

import * as S from './styles'

export type ParagraphProps = {
  content: string
}

const Paragraph = ({ content }: ParagraphProps) => (
  <S.Description data-cy="content">{content}</S.Description>
)

export default Paragraph
