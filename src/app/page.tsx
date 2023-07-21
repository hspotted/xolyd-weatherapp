import { type NextPage } from 'next'

import { CityPicker, Logo } from '@/components/ui'
import { Card, Divider, Subtitle } from '@tremor/react'

const HomePage: NextPage = () => {
  return (
    <main className='flex flex-col min-h-screen min-w-screen items-center justify-center bg-gradient-to-bl from-slate-950 to-slate-700'>
      <Card className='max-w-4xl mx-auto'>
        <Logo />
        <Subtitle className='text-xl text-center my-10'>
          Weather application built with Next.JS, Tremor, TailwindCSS and Open
          AI
        </Subtitle>
        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-slate-950 to-slate-700'>
          <CityPicker />
        </Card>
      </Card>
    </main>
  )
}

export default HomePage
