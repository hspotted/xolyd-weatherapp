import type { Root } from '@/models/types'
import type { Color } from '@tremor/react'

import { AreaChart, Card, Title } from '@tremor/react'

interface GraphChartProps {
  results: Root
  label: string
  values: {
    [key: string]: number[]
  }
  colors: Color[]
}

export const GraphChart = ({
  results,
  label,
  values,
  colors
}: GraphChartProps) => {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        hour12: true
      })
    )
    .slice(0, 24)

  const data = hourly.map((hour, index) => ({
    time: Number(hour),
    ...Object.keys(values).reduce((acc, key) => {
      acc[key] = values[key][index]
      return acc
    }, {} as any)
  }))

  const categories = Object.keys(values)

  return (
    <Card>
      <Title>{label}</Title>
      <AreaChart
        data={data}
        index='time'
        showLegend
        minValue={0}
        categories={categories}
        colors={colors}
        yAxisWidth={40}
        className='mt-6'
      />
    </Card>
  )
}
