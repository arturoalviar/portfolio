import { css } from 'styled-components'
import colors from '@styles/colors'
import { remCalc } from '@styles/mixins'

export const iconCss = css`
  padding-right: 30px !important;
  .icon-svg {
    position: absolute;
    margin-top: 2px;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &:hover {
    .icon-svg {
      transform: translate(10px, -50%);
    }
  }
`

export const defaultStyles = css`
  border: 1px solid transparent;
  outline: 0;
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${remCalc(15)};
  font-weight: 700;
  letter-spacing: 0.095em;
  line-height: 1;
  position: relative;
  margin: ${remCalc(15)};
  margin-left: 0;
  padding: ${remCalc(16)};
  min-width: ${remCalc(140)};
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 1;
`

const primaryStyles = ({ bg, bgHover, text, textHover }) => {
  return css`
    color: ${text};
    z-index: 1;
    &:before {
      content: '';
      background-color: ${bg};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
      z-index: -1;
    }
    &:hover {
      color: ${textHover};
      &:before {
        height: 10%;
      }
    }
  `
}

export const primary = {
  default: {
    light: primaryStyles({
      bg: colors.black,
      bgHover: colors.black,
      text: colors.white,
      textHover: colors.black,
    }),
    dark: primaryStyles({
      bg: colors.white,
      bgHover: colors.whiteHover,
      text: colors.black,
      textHover: colors.white,
    }),
  },
  inverse: {
    light: primaryStyles({
      bg: colors.white,
      bgHover: colors.whiteHover,
      text: colors.black,
      textHover: colors.white,
    }),
    dark: primaryStyles({
      bg: colors.black,
      bgHover: colors.black,
      text: colors.white,
      textHover: colors.black,
    }),
  },
  color: {
    light: primaryStyles({
      bg: colors.main,
      bgHover: colors.mainHover,
      text: colors.black,
      textHover: 'inherit',
    }),
    dark: primaryStyles({
      bg: colors.main,
      bgHover: colors.mainHover,
      text: colors.black,
      textHover: colors.main,
    }),
  },
}

const ghostStyle = color => {
  return css`
    background-color: transparent;
    color: ${color};
    position: relative;
    z-index: 1;
    &:before {
      box-shadow: inset 0 0 0 3px ${color};
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
      z-index: -1;
    }
    &:hover {
      &:before {
        height: 10%;
      }
    }
  `
}

export const ghost = {
  default: {
    light: ghostStyle(colors.black),
    dark: ghostStyle(colors.white),
  },
  inverse: {
    light: ghostStyle(colors.white),
    dark: ghostStyle(colors.black),
  },
  color: {
    light: ghostStyle(colors.main),
    dark: ghostStyle(colors.main),
  },
}

const button = {
  defaultStyles,
  ghost,
  primary,
}

export default button
