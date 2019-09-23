import { css } from 'styled-components'

export const hamburgerButtonStyles = css`
  background: none;
  border: 0;
  display: block;
  outline: 0;
  position: relative;
  width: 64px;
  height: 64px;
  padding: 0;
  margin: 0;
  margin-right: -20px;
  pointer-events: bounding-box;
  transition: transform 0.5s ease-in-out 0.125s;
  z-index: 1001;
  div:nth-child(1) {
    top: 24px;
  }
  div:nth-child(2) {
    top: 30px;
  }
  div:nth-child(3) {
    top: 36px;
    width: 16px;
  }
  &:hover {
    div:nth-child(3) {
      width: 24px;
    }
  }
  &.is-active {
    div {
      background: ${props => props.theme.colors.white};
      width: 24px;
      transition: width 0.125s ease-in-out 0.875s, top 0.25s ease-in-out 0.25s,
        transform 0.25s ease-out 0.5s, opacity 0.001s linear 0.5s;
    }
    div:nth-child(1) {
      top: 30px;
      transform: rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      top: 30px;
      transform: rotate(-45deg);
    }
  }
  ${props => props.theme.minMedia.md`
    display: none;
  `}
`

export const hamburgerLineStyles = css`
  position: absolute;
  left: 20px;
  width: 24px;
  height: 2px;
  background: ${props => props.theme.colors.navColor};
  transition: width 0.125s ease-in-out, top 0.25s ease-in-out 0.5s,
    transform 0.25s ease-out 0.25s, opacity 0.001s linear 0.5s;
`

const hamburger = {
  hamburgerButtonStyles,
  hamburgerLineStyles,
}

export default hamburger
