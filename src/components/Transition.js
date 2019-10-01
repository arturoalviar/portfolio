import React, { useState, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'

const transitionDuration = 400
const transitionDelay = 450

const PageTransition = posed.div({
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration, easing: 'easeIn' },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    transition: { duration: transitionDuration, easing: 'easeOut' },
  },
})

const Transition = ({ location, children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className={loaded ? 'is-loaded' : 'is-loading'}>
      <PoseGroup animateOnMount preEnterPose="initial">
        <PageTransition id="transition-content" key={location.pathname}>
          {children}
        </PageTransition>
      </PoseGroup>
    </main>
  )
}

export default Transition
