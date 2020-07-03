import React, { useState, useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import {
  ProjectAdditionalCollection,
  ProjectCollection,
  Section,
} from '@components'

import {
  Button,
  ButtonWrapper,
  AdditionalProjectsVariants,
  AdditionalProjects,
  AdditionalProjectsWrapper,
} from '@styles/components/project/projectPageContent'

const ProjectPageContent = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [moreProjectsTop, setMoreProjectsTop] = useState(0)
  const moreProjectsRef = useRef()

  const handleClick = () => {
    setShowMoreProjects(!showMoreProjects)
    updateProjectsTop()
  }

  const updateProjectsTop = () => {
    const top =
      moreProjectsRef.current.getBoundingClientRect().top + window.pageYOffset
    setMoreProjectsTop(top)
  }

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const scrollAfterAnimation = () => {
    if (showMoreProjects) {
      window.scroll({
        top: moreProjectsTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Section>
        <ProjectCollection type="card" />
        <ButtonWrapper>
          <Button onClick={handleClick} variant="color">
            {showMoreProjects ? 'Hide' : 'More'} Projects
          </Button>
        </ButtonWrapper>
        <AdditionalProjects
          ref={moreProjectsRef}
          initial={false}
          animate={showMoreProjects ? 'open' : 'closed'}
          variants={AdditionalProjectsVariants}
          onAnimationComplete={scrollAfterAnimation}
          transition={{ duration: 0.525, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <AdditionalProjectsWrapper>
            <ProjectAdditionalCollection />
          </AdditionalProjectsWrapper>
        </AdditionalProjects>
      </Section>
    </>
  )
}

export default ProjectPageContent
