import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { bgs } from '@styles/colors'

const sectionBg = theme.variants('mode', 'variant', bgs)

const decoratorCss = css`
  padding-bottom: ${props => props.theme.spacing.section.md};
  &:before {
    ${sectionBg}
    content: '';
    display: block;
    position: absolute;
    top: -${props => props.theme.spacing.section.sm};
    right: 0;
    width: 50%;
    height: ${props => props.theme.spacing.section.sm};
    ${props => props.theme.minMedia.lg`
      top: -${props => props.theme.spacing.section.md};
      height: ${props => props.theme.spacing.section.md};
    `}
  }
`

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
  ${props => (props.decorator ? decoratorCss : '')}

`

Section.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse', 'color', 'mono']),
  decorator: PropTypes.bool,
}

Section.defaultProps = {
  decorator: false,
  variant: 'default',
}

export default Section
