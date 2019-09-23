import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'
import colors from '@styles/colors'
import { smallText } from '@styles/typography'

const indicatorColor = theme.variants('mode', 'variant', {
  default: {
    light: colors.black,
    dark: colors.white,
  },
  color: {
    light: colors.main,
    dark: colors.main,
  },
})

const Title = styled.p`
  ${smallText}
  line-height: 1;
  padding-left: ${props => props.theme.mixins.remCalc(25)};
  position: relative;
  margin-bottom: ${props => props.theme.mixins.remCalc(20)};
  &:before {
    background: ${indicatorColor};
    content: '';
    position: absolute;
    top: 3px;
    left: 1px;
    width: ${props => props.theme.mixins.remCalc(10)};
    height: ${props => props.theme.mixins.remCalc(10)};
    transform: rotate(45deg);
  }
`

Title.propTypes = {
  variant: PropTypes.oneOf(['default', 'inverse', 'color']),
}

Title.defaultProps = {
  variant: 'color',
}

export default Title
