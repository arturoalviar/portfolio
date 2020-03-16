import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'
import { bgs } from '@styles/colors'

const sectionBg = theme.variants('mode', 'variant', bgs)

const Section = styled.section`
  position: relative;
  padding-top: ${props => props.theme.spacing.section.sm};
  padding-bottom: ${props => props.theme.spacing.section.sm};
  ${props => props.theme.minMedia.sm`
    padding-top: ${props.theme.spacing.section.lg};
    padding-bottom: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.lg`
    padding-top: ${props.theme.spacing.section.xl};
    padding-bottom: ${props.theme.spacing.section.xl};
  `}
  ${sectionBg}
`

Section.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse', 'color', 'mono']),
}

Section.defaultProps = {
  variant: 'default',
}

export default Section
