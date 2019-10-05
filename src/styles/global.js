import theme from './theme'
import { css, createGlobalStyle } from 'styled-components'
import { globalType } from '@styles/typography'

const { colors, fonts, globalColor } = theme

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: ${globalColor};
  }

  *,
  *:before,
  *:after{
    box-sizing: inherit;
  }
  body {
    background-color: ${globalColor};
    color: ${colors.black};
    font-family: ${fonts.default};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    margin: 0;
    padding: 0;
    transition: backround .3s ease-in;
  }

  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;
  }

  main.is-loading {
    #transition-content{
      visibility: hidden;
    }
  }
  main.is-loaded {
    #transition-content{
      visibility: visible;
    }
  }

  ${globalType}

  ${props => {
    if (props.theme.mode === 'dark') {
      return css`
        body.aa-project-page header a {
          color: ${props.theme.colors.black};
        }
      `
    }
  }}
`
