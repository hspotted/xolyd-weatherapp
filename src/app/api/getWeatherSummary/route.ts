import { openai } from '@/lib/openai'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { weatherData } = await request.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content: `Pretend you're a weather news presenter presenting LIVE on television. Be energetic and full of charisma. Introduce yourself as Xolyd and say you're LIVE from Xolyd Headquarters. State the city you're providing a summary for. Then give a summary of todays weather only. Make it providing a summary for. Then give a summary of todays weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the uv_index data provided to UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.`
      },
      {
        role: 'user',
        content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`
      }
    ]
  })

  const { data } = response

  return NextResponse.json(data.choices[0].message)
}
