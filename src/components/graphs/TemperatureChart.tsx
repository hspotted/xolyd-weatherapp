import { Root } from '@/models/types'
import { AreaChart, Card, Title } from '@tremor/react'

interface TemperatureChartProps {
  results: Root
}

export const TemperatureChart = ({ results }: TemperatureChartProps) => {
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
    'UV Index': results.hourly.uv_index[index],
    'Temperature (ºC)': results.hourly.temperature_2m[index]
  }))

  return (
    <Card>
      <Title>Temperature & UV Index</Title>
      <AreaChart
        data={data}
        index='time'
        showLegend
        minValue={0}
        categories={['Temperature (ºC)', 'UV Index']}
        colors={['blue', 'rose']}
        yAxisWidth={40}
        className='mt-6'
      />
    </Card>
  )
}
