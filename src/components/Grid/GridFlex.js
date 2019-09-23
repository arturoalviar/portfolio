import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeGrid } from '@styles/mixins'

const GridFlex = styled.div`
  margin-left: -${props => props.theme.gutter.container};
  margin-right: -${props => props.theme.gutter.container};
  width: calc(100% + 60px);
  ${props => makeGrid(props, true)}
`

GridFlex.propTypes = {
  align: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  startsOn: PropTypes.string,
  wrap: PropTypes.string,
}

GridFlex.defaultProps = {
  align: 'flex-start',
  direction: 'row',
  justify: 'flex-start',
  startsOn: 'sm',
  wrap: 'wrap',
}

export default GridFlex
