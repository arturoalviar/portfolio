import { css } from 'styled-components'

const linkCss = css`
  color: ${props => props.theme.colors.main};
  display: inline-block;
  font-weight: 900;
  position: relative;
  padding-left: 3px;
  padding-right: 3px;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  &::after {
    background-color: currentColor;
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3em;
    width: 100%;
    height: 0.18em;
    transition: all 0.2s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: ${props => props.theme.colors.darkText};
    &::after {
      background-color: ${props => props.theme.colors.main};
      height: 100%;
      transform: translateY(-0.3em);
    }
  }
`

export default linkCss
