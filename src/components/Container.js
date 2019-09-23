import PropTypes from 'prop-types'
import styled from 'styled-components'

const sizes = {
  small: 800,
  default: 1100,
  large: 1300,
}

const Container = styled.div`
  max-width: ${props => props.theme.mixins.remCalc(sizes[props.size] + 60)};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.gutter.container};
  padding-right: ${props => props.theme.gutter.container};
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  size: 'default',
}

export default Container
