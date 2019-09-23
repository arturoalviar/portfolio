import { css } from 'styled-components'

const breakpoints = {
  xs: 400,
  sm: 600,
  md: 900,
  lg: 1200,
}

// Iterate through the breakpoints and create a media template
const maxMedia = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const minMedia = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export { minMedia, maxMedia }
