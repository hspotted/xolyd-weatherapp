import { Root } from '@/models/types'
import { AreaChart, Card, Title } from '@tremor/react'

interface RainChartProps {
  results: Root
}

export const RainChart = ({ results }: RainChartProps) => {
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
    'Rain (%)': results.hourly.precipitation_probability[index]
  }))

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        data={data}
        index='time'
        showLegend
        minValue={0}
        categories={['Rain (%)']}
        colors={['orange']}
        yAxisWidth={40}
        className='mt-6'
      />
    </Card>
  )
}
