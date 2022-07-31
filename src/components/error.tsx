import React, { FC } from 'react'

interface ErrorProps {
  error: string
}
export const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      Oops! There was an error: { error }
    </div>
  )
}
