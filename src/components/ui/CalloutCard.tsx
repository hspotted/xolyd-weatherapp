import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

interface CalloutCardProps {
  message: string
  warning?: boolean
}

export const CalloutCard = ({ message, warning }: CalloutCardProps) => {
  return (
    <Callout
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? 'rose' : 'teal'}
      className='text-md text-justify'
    />
  )
}
