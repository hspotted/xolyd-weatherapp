import { CityPicker, Logo } from '@/components/ui'
import { weatherCodeToString } from '@/lib/weatherCodeToString'
import { Root } from '@/models/types'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { Text } from '@tremor/react'

import { WeatherIcon } from '../ui/WeatherIcon'

interface InformationPanelProps {
  city: string
  lat: string
  long: string
  results: Root
}

export const InformationPanel = ({
  city,
  lat,
  long,
  results
}: InformationPanelProps) => {
  return (
    <div className='bg-gradient-to-br from-slate-950 to-slate-800 p-10 pt-16'>
      <Logo width={300} />
      <div className='py-8'>
        <Text className='text-4xl font-bold text-white'>{decodeURI(city)}</Text>
        <Text className='text-md text-slate-50'>
          Long/Lat: {long}, {lat}
        </Text>
      </div>
      <CityPicker />
      <hr className='my-10' />
      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
          <Text className='text-xl text-white'>
            {new Date().toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Text>
          <Text className='text-white font-extralight text-md'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </Text>
        </div>
        <Text className='text-white text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })}
        </Text>
      </div>
      <hr className='my-10' />
      <div className='flex items-center justify-between'>
        <div>
          <WeatherIcon code={results.current_weather.weathercode} />
          <div className='flex items-center justify-between space-x-10'>
            <Text className='text-white text-6xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}ºC
            </Text>
            <Text className='text-white text-right font-extralight text-xl'>
              {weatherCodeToString[results.current_weather.weathercode].label}
            </Text>
          </div>
        </div>
      </div>
      <hr className='my-10 mb-5' />
      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-slate-800 rounded-md bg-slate-950'>
          <SunIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <Text className='text-white font-extralight'>Sunrise</Text>
            <Text className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </Text>
          </div>
        </div>
        <div className='flex items-center space-x-2 px-4 py-3 border border-slate-800 rounded-md bg-slate-950'>
          <MoonIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <Text className='text-white font-extralight'>Sunset</Text>
            <Text className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunset[0]).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
