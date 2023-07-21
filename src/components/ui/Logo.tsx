import Image from 'next/image'

interface LogoProps {
  width?: number
  isDark?: boolean
}

export const Logo = ({ width = 400, isDark = false }: LogoProps) => {
  return (
    <Image
      src={`/xolyd${isDark ? '-dark' : ''}.svg`}
      alt='Xolyd Logo'
      width={width}
      height={0}
      priority
      className='mx-auto'
    />
  )
}
