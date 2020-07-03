import styled from 'styled-components'
import { GridItem } from '@components'

const ProjectCard = styled(GridItem)`
  grid-row: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: ${props => props.theme.gutter.grid};
  ${props => props.theme.minMedia.md`
    margin-bottom: 0;
  `}
`

const ProjectCardImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  a {
    display: block;
  }
`

const ProjectCardImage = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    background-color: ${props => props.theme.colors.globalColor};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.src});
    content: '';
    display: block;
    padding-bottom: 62.25%;
  }
`

const ProjectCardDetails = styled.div`
  position: relative;
  padding: ${props => props.theme.gutter.container};
`

const ProjectCardTitle = styled.h2`
  color: inherit;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.mixins.remCalc(32)};
  line-height: 1;
  margin-bottom: 0.35em;
`

export {
  ProjectCard,
  ProjectCardImage,
  ProjectCardImageWrapper,
  ProjectCardDetails,
  ProjectCardTitle,
}
