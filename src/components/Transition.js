import React from 'react'
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
  return (
    <PoseGroup animateOnMount preEnterPose="initial">
      <PageTransition key={location.pathname}>{children}</PageTransition>
    </PoseGroup>
  )
}

export default Transition
