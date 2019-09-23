import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gutter } from '@styles/units'
import { makeCol } from '@styles/mixins'

const GridFlexItem = styled.div`
  position: relative;
  padding-left: ${props => props.gutter};
  padding-right: ${props => props.gutter};
  ${props => makeCol(props, true)}
`

GridFlexItem.propTypes = {
  gutter: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

GridFlexItem.defaultProps = {
  gutter: gutter.grid,
}

export default GridFlexItem
