import { gql } from '@apollo/client'

export const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset"
    $hourly: String = "temperature_2m,apparent_temperature,relativehumidity_2m,precipitation,precipitation_probability,windgusts_10m,uv_index,uv_index_clear_sky,snowfall,snow_depth,rain,showers"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      longitude: $longitude
      timezone: $timezone
      latitude: $latitude
    ) {
      elevation
      generationtime_ms
      latitude
      timezone
      longitude
      timezone_abbreviation
      utc_offset_seconds
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunset
        sunrise
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      hourly {
        apparent_temperature
        is_day
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        temperature_2m
        snowfall
        time
        uv_index
        uv_index_clear_sky
        weathercode
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        is_day
        precipitation_probability
        precipitation
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        weathercode
        windgusts_10m
      }
    }
  }
`
