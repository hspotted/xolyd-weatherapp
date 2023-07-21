import { weatherCodeToString } from '@/lib/weatherCodeToString'
import Image from 'next/image'

interface WeatherIconProps {
  code: number
}

export const WeatherIcon = ({ code }: WeatherIconProps) => {
  return (
    <Image
      src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[code].icon}.png`}
      alt={weatherCodeToString[code].label}
      width={75}
      height={75}
    />
  )
}
