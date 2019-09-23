import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import { Grid, GridItem } from '@components'
import { remCalc } from '@styles/mixins'
import { minMedia } from '@styles/breakpoints'

const ProjectWide = styled(Grid)`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.section.sm};
  ${minMedia.md`
    margin-bottom: ${props => props.theme.spacing.section.xl};
  `}
`

const ProjectWideDetails = styled(GridItem)`
  color: currentColor;
  display: flex;
  flex-flow: column;
  justify-content: center;
  grid-row: 1;
  position: relative;
  padding: ${remCalc(32)} 0;
  z-index: 1;
  ${minMedia.md`
    &.is-odd {
      grid-column: 9 / -1;
      text-align: right;
    }
  `}
`

const ProjectButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${minMedia.md`
    &.is-odd {
      justify-content: flex-end;
      a {
        margin-right: 0;
      }
    }
  `}
`

const ProjectWideTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${remCalc(28)};
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 0.15em;
  ${minMedia.md`
    font-size: ${remCalc(36)};
  `}
  ${minMedia.lg`
    font-size: ${remCalc(56)};
  `}
`

const ProjectWideExcerpt = styled.p`
  font-size: ${remCalc(16)};
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
`

const ProjectWideImageWrapper = styled(GridItem)`
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.12);
  grid-row: 1;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -${props => props.theme.gutter.container};
    ${props =>
      props.isOdd ? `left: -${remCalc(15)}` : `right: -${remCalc(15)}`};
    background-repeat: repeat;
    background-size: 10px;
    background-position: top left;
    background-image: url(${withPrefix('x-texture.svg')});
    opacity: 0.1;
    width: ${remCalc(280)};
    height: ${remCalc(120)};
    z-index: -10;
    ${minMedia.md`
      width: ${remCalc(580)};
      height: ${remCalc(360)};
      ${props =>
        props.isOdd
          ? `left: -${props.theme.gutter.container}`
          : `right: -${props.theme.gutter.container}`};
    `}
  }
  a {
    display: block;
  }
  &.is-odd {
    grid-column: 1 / 9;
  }
`
const ProjectWideImage = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:before {
    background-color: ${props => props.theme.colors.main};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.src});
    content: '';
    display: block;
    padding-bottom: 62.5%;
  }
`

export {
  ProjectWide,
  ProjectWideDetails,
  ProjectWideTitle,
  ProjectWideExcerpt,
  ProjectWideImage,
  ProjectWideImageWrapper,
  ProjectButtonGroup,
}
