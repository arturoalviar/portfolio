import React from 'react'
import { Location } from '@reach/router'
import { Wrapper } from './src/components'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Location>
      {({ location }) => (
        <Wrapper location={location} {...props}>
          {element}
        </Wrapper>
      )}
    </Location>
  )
}

const transitionDelay = 450

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
