import { css } from 'styled-components'
import theme from 'styled-theming'

const navColor = theme('navMode', {
  dark: props => props.theme.colors.white,
  light: props => props.theme.colors.black,
})

export const globalColor = theme('mode', {
  dark: props => props.theme.colors.black,
  light: props => props.theme.colors.white,
})

const colors = {
  main: 'hsl(41, 100%, 50%)', // serika gold
  mainHover: 'hsl(40, 98%, 38%)', // serika gold
  black: 'hsl(0, 0%, 2%)',
  blackHover: 'hsl(0, 0%, 20%)',
  white: '#FFFFFF',
  whiteHover: 'hsl(0, 0%, 90%)',
  lightHeadingText: 'hsl(0, 0%, 100%)',
  darkHeadingText: 'hsl(0, 0%, 4%)',
  lightText: 'hsl(0, 0%, 98%)',
  darkText: 'hsl(0, 0%, 13%)',
  lightGray: 'hsl(210, 50%, 98%)',
  gray: 'hsl(206, 3%, 58%)',
  darkGray: 'hsl(0, 1%, 17%)',
  navColor,
  globalColor,
}

export const globalTextColor = theme('mode', {
  dark: props => props.theme.colors.gray,
  light: props => props.theme.colors.darkGray,
})
export const globalInverseColor = theme('mode', {
  dark: props => props.theme.colors.white,
  light: props => props.theme.colors.black,
})
export const globalInverseTextColor = theme('mode', {
  dark: props => props.theme.colors.darkGray,
  light: props => props.theme.colors.gray,
})

export const bgs = {
  default: {
    light: css`
      background-color: ${colors.white};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.black};
      color: ${colors.lightText};
      h1,
      h2,
      h3 {
        color: ${colors.lightHeadingText};
      }
    `,
  },
  inverse: {
    light: css`
      background-color: ${colors.black};
      color: ${colors.lightText};
      h1,
      h2,
      h3 {
        color: ${colors.lightHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.white};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
  },
  color: {
    light: css`
      background-color: ${colors.main};
      color: ${colors.darkText};
    `,
    dark: css`
      background-color: ${colors.main};
      color: ${colors.darkText};
    `,
  },
  mono: {
    light: css`
      background-color: ${colors.lightGray};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
    dark: css`
      background-color: ${colors.lightGray};
      color: ${colors.darkText};
      h1,
      h2,
      h3 {
        color: ${colors.darkHeadingText};
      }
    `,
  },
}

export default colors
