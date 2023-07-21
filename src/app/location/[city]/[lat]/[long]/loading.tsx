import { SunIcon } from '@heroicons/react/outline'
import { Text } from '@tremor/react'

const Loading = () => {
  return (
    <div className='bg-gradient-to-br from-slate-950 to-slate-800 min-h-screen flex flex-col items-center justify-center text-slate-50'>
      <SunIcon
        className='h-24 w-24 animate-bounce text-yellow-500'
        color='yellow'
      />
      <Text className='text-6xl font-bold text-center mb-10 animate-pulse text-white'>
        Loading City Weather Information
      </Text>
      <Text className='text-xl font-bold text-center mb-10 animate-pulse text-white'>
        Hold on, we are crunching the numbers & generating the AI summary of the
        weather for you!
      </Text>
    </div>
  )
}

export default Loading
