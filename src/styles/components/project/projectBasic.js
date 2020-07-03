import styled from 'styled-components'

const ProjectBasicWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.section.sm};
  position: relative;
  padding-left: ${props => props.theme.gutter.grid};
  padding-right: ${props => props.theme.gutter.grid};
  ${props => props.theme.minMedia.md`
    margin-bottom: ${props.theme.spacing.section.lg};
  `}
`

const ProjectBasicDetails = styled.div`
  padding-top: ${props => props.theme.mixins.remCalc(12)};
  p {
    margin: 0;
  }
`
const ButtonGroup = styled.div`
  ${props => props.theme.minMedia.sm`
    display: flex;
    flex-flow: column;
    margin-left: auto;
    a {
      margin-top: 0;
      margin-right: 0;
    }
  `}
`

export { ProjectBasicWrapper, ProjectBasicDetails, ButtonGroup }
