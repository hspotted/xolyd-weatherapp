import type { HourlyUnits, Root } from '@/models/types'

import { GraphChart } from '@/components/graphs'
import { InformationPanel } from '@/components/sections'
import { CalloutCard, StatsCard } from '@/components/ui'
import { getClient } from '@/lib/apolloClient'
import { cleanData } from '@/lib/cleanData'
import { getBasePath } from '@/lib/getBasePath'
import { fetchWeatherQuery } from '@/lib/graphql/queries/fetchWeatherQueries'
import { Text } from '@tremor/react'

interface WeatherPageProps {
  params: {
    city: string
    lat: string
    long: string
  }
}
const getChatGPTSummary = async (dataToSendGPT: {
  current_weather: {
    temperature: number
    windspeed: number
    winddirection: number
    weathercode: number
    time: string
  }
  hourly: {
    temperature_2m: number[]
    snowfall: number[]
    rain: number[]
    relativehumidity_2m: number[]
    precipitation_probability: number[]
    uv_index: number[]
  }
  timezone: string
  timezone_abbreviation: string
  hourly_units: HourlyUnits
  city: string
}) => {
  const response = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ weatherData: dataToSendGPT })
  })
  const GPTdata = await response.json()
  const content = GPTdata.content
  return content ?? 'No summary available'
}

const WeatherPage = async ({
  params: { city, lat, long }
}: WeatherPageProps) => {
  const client = getClient()

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT'
    }
  })
  const results: Root = data.myQuery

  const dataToSendGPT = cleanData(results, city)
  const message = await getChatGPTSummary(dataToSendGPT)

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InformationPanel
        city={city}
        lat={lat}
        long={long}
        results={results}
      />
      <main className='flex-1 p-5 lg:p-10'>
        {/** TITLE */}
        <div className='p-5'>
          <div className='pb-5'>
            <Text className='text-xl font-bold'>Todays Overview</Text>
            <Text className='text-sm text-gray-400'>
              Last Updated at:{' '}
              {new Date(results.current_weather.time).toLocaleDateString()} (
              {results.timezone})
            </Text>
          </div>
          {/** SUMMARY */}
          <div className='m-2 mb-10'>
            <CalloutCard message={message} />
          </div>

          <div className='grid gird-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <StatsCard
              title='Maximum Temperature'
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}ºC`}
              color='red'
            />
            <StatsCard
              title='Minimum Temperature'
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}ºC`}
              color='blue'
            />
            <div className='space-y-4'>
              <StatsCard
                title='UV Index'
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color='yellow'
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) >= 5 && (
                <CalloutCard
                  message='The UV is high today, be sure to wear SPF!'
                  warning
                />
              )}
            </div>
            <div className='flex space-x-3'>
              <StatsCard
                title='Wind Speed'
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color='violet'
              />
              <StatsCard
                title='Wind Direction'
                metric={`${results.current_weather.winddirection.toFixed(1)}º`}
                color='orange'
              />
            </div>
          </div>
          <hr className='my-5' />
          <div className='space-y-3'>
            <GraphChart
              label='Temperature & UV Index'
              results={results}
              values={{
                'UV Index': results.hourly.uv_index,
                'Temperature (ºC)': results.hourly.temperature_2m
              }}
              colors={['blue', 'rose']}
            />
            <GraphChart
              label='Humidity (%)'
              results={results}
              values={{
                'Humidity (%)': results.hourly.relativehumidity_2m
              }}
              colors={['teal']}
            />
            <GraphChart
              label='Chances of Rain'
              results={results}
              values={{
                'Rain (%)': results.hourly.precipitation_probability
              }}
              colors={['orange']}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default WeatherPage
