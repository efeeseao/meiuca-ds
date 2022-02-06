import React from 'react'

import { Button, Heading, Paragraph, Subtitle } from 'components'

import * as S from './styles'

export type CardProps = {
  title: string
  subtitle: string
  description: string
  label: string
}

export const Card = ({ description, label, subtitle, title }: CardProps) => (
  <S.Card>
    <S.CardHeader>
      <Heading>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
    </S.CardHeader>
    <S.CardBody>
      <Paragraph>{description}</Paragraph>
      <Button>{label}</Button>
    </S.CardBody>
  </S.Card>
)
