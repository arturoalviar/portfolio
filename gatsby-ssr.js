import React from 'react'
import { Location } from '@reach/router'
import { Wrapper } from './src/components'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Location>
      {({ location }) => <Wrapper {...props}>{element}</Wrapper>}
    </Location>
  )
}
