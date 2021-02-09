import { css } from 'styled-components'
import { remCalc } from '@styles/mixins'
import { minMedia } from '@styles/breakpoints'

const fontMain = 'Mulish'
const fontSecond = 'Playfair Display'

export const globalType = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    font-family: ${fontSecond};
    font-weight: 400;
  }

  h4,
  h5,
  h6 {
    font-family: ${fontMain};
    font-weight: bold;
  }

  h1 {
    font-size: ${remCalc(36)};
    line-height: 1;
    ${minMedia.md`
      font-size: ${remCalc(45)};
    `}
    ${minMedia.lg`
      font-size: ${remCalc(64)};
    `}
  }

  h2 {
    font-size: ${remCalc(28)};
    line-height: 1.1;
    ${minMedia.md`
      font-size: ${remCalc(36)};
    `}
    ${minMedia.lg`
      font-size: ${remCalc(45)};
    `}
  }

  h3 {
    font-size: ${remCalc(20)};
    line-height: 1.4;
    margin-bottom: ${remCalc(18)};
    ${minMedia.md`
      font-size: ${remCalc(28)};
    `}
    ${minMedia.lg`
      font-size: ${remCalc(36)};
    `}
  }

  h4 {
    font-size: ${remCalc(16)};
    line-height: 1.5;
    ${minMedia.md`
      font-size: ${remCalc(20)};
    `}
    ${minMedia.lg`
      font-size: ${remCalc(28)};
    `}
  }

  h5 {
    font-size: ${remCalc(18)};
    ${minMedia.md`
      font-size: ${remCalc(20)};
    `}
  }

  p {
    font-size: ${remCalc(16)};
    line-height: 1.8;
    margin: 0;
    margin-bottom: ${remCalc(16)};
    ${minMedia.lg`
      font-size: ${remCalc(18)};
      margin-bottom: ${remCalc(18)};
    `}
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: square inside;
  }

  li {
    font-size: ${remCalc(16)};
    line-height: 1.8;
    margin: 0;
    margin-bottom: ${remCalc(16)};
    ${minMedia.lg`
      font-size: ${remCalc(18)};
      margin-bottom: ${remCalc(18)};
    `}
  }
`

export const smallText = css`
  font-size: ${remCalc(12)};
  font-weight: 700;
  text-transform: lowercase;
  letter-spacing: 0.16em;
  ${minMedia.md`
    font-size: ${remCalc(14)};
  `}
`

const fonts = {
  default: `'${fontMain}', -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `'${fontSecond}', serif`,
  main: `'${fontMain}', sans-serif`,
}

export default fonts
