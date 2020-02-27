import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import { motion } from 'framer-motion'
import smoothscroll from 'smoothscroll-polyfill'
import {
  ProjectAdditionalCollection,
  ProjectCollection,
  Section,
} from '@components'
import button from '@styles/components/button'

const primaryStyles = theme.variants('mode', 'variant', button.primary)

const Button = styled.button`
  ${button.defaultStyles}
  ${primaryStyles}
`

const ButtonWrapper = styled.div`
  position: relative;
  padding-top: ${props => props.theme.spacing.section.sm};
  text-align: center;
  ${props => props.theme.minMedia.sm`
    padding-top: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.lg`
    padding-top: ${props.theme.spacing.section.xl};
  `}
`

const AdditionalProjectsVariants = {
  closed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: 'auto',
    opacity: 1,
  },
}

const AdditionalProjects = styled(motion.div)`
  overflow: hidden;
`

const AdditionalProjectsWrapper = styled.div`
  padding-top: ${props => props.theme.spacing.section.sm};
  ${props => props.theme.minMedia.sm`
    padding-top: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.lg`
    padding-top: ${props.theme.spacing.section.xl};
  `}
`

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
