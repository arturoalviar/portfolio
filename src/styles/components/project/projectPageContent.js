import styled from 'styled-components'
import { motion } from 'framer-motion'

import { defaultStyles, primaryStylesVariants } from '@styles/components/button'

const Button = styled.button`
  ${defaultStyles};
  ${primaryStylesVariants}
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

export {
  Button,
  ButtonWrapper,
  AdditionalProjectsVariants,
  AdditionalProjects,
  AdditionalProjectsWrapper,
}
