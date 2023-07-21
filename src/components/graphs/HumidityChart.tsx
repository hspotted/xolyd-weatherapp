import { Root } from '@/models/types'
import { AreaChart, Card, Title } from '@tremor/react'

interface HumidityChartProps {
  results: Root
}

export const HumidityChart = ({ results }: HumidityChartProps) => {
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
    'Humidity (%)': results.hourly.relativehumidity_2m[index]
  }))

  return (
    <Card>
      <Title>Humidity (%)</Title>
      <AreaChart
        data={data}
        index='time'
        showLegend
        minValue={0}
        categories={['Humidity (%)']}
        colors={['pink']}
        yAxisWidth={40}
        className='mt-6'
      />
    </Card>
  )
}
