import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeCol } from '@styles/mixins'

const GridItem = styled.div`
  display: block;
  position: relative;
  ${props => makeCol(props)}
`

GridItem.propTypes = {
  xs: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  sm: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  md: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  lg: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
}

export default GridItem
