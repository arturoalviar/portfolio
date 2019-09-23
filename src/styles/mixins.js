import { css } from 'styled-components'
import { minMedia } from '@styles/breakpoints'

const makeCssGrid = ({ cols, gap }) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-gap: ${gap};
  `
}

const makeFlexBox = ({ direction, wrap, justify, align }) => {
  return css`
    display: flex;
    flex-flow: ${direction} ${wrap};
    justify-content: ${justify};
    align-items: ${align};
  `
}

const makeGrid = (props, isFlex = false) => {
  const { startsOn } = props

  if (isFlex) {
    return minMedia[startsOn]`${makeFlexBox(props)}`
  }
  return minMedia[startsOn]`${makeCssGrid(props)}`
}

const getPercentage = (numerator, denominator = 12) => {
  return `${(numerator / denominator) * 100}%`
}

const makeCol = ({ xs, sm, md, lg, xl }, isFlex = false) => {
  const breakpoints = {
    xs,
    sm,
    md,
    lg,
    xl,
  }

  let styles

  if (isFlex) {
    styles = Object.keys(breakpoints)
      .map(breakpoint => {
        const size = breakpoints[breakpoint]
        if (size && Number.isInteger(parseInt(size))) {
          //call our minMedia mixin and create some css for given breakpoint
          return css`
            ${minMedia[breakpoint]`width: ${getPercentage(size)}`}
          `.join('')
        }
        return false
      })
      .filter(query => query)
  } else {
    styles = Object.keys(breakpoints)
      .map(breakpoint => {
        if (breakpoints[breakpoint] !== undefined) {
          const { start, end } = breakpoints[breakpoint]
          return css`
            ${minMedia[breakpoint]`grid-column: ${start} / ${end};`}
          `.join('')
        }
        return false
      })
      .filter(query => query)
  }

  return css`
    ${styles}
  `
}

const remCalc = (value, base = 16) => {
  const sanitizedValue = parseInt(value)
  return `${sanitizedValue / base}rem`
}

const remToPx = (value, base = 16) => {
  const sanitizedValue = parseInt(value)
  return `${sanitizedValue * base}px`
}

const mixins = {
  remCalc,
  remToPx,
}

export { remCalc, remToPx, makeGrid, makeCol }

export default mixins
