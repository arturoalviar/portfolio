import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gutter } from '@styles/units'
import { makeGrid } from '@styles/mixins'

const Grid = styled.div`
  ${props => makeGrid(props)}
`

Grid.propTypes = {
  cols: PropTypes.string,
  items: PropTypes.string,
  startsOn: PropTypes.string,
  gap: PropTypes.string,
}

Grid.defaultProps = {
  cols: '2',
  items: '2',
  startsOn: 'sm',
  gap: gutter.grid,
}

export default Grid
