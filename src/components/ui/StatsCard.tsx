import type { Color } from '@tremor/react'

import { Card, Metric, Text } from '@tremor/react'

interface StatsCardProps {
  title: string
  metric: string
  color: Color
}

export const StatsCard = ({ title, metric, color }: StatsCardProps) => {
  return (
    <Card
      decorationColor={color}
      decoration='top'
    >
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  )
}
