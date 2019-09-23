import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, GridFlex } from '@components'

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

const ProjectBasic = ({ details }) => {
  const { client, position, repository, title, website, year } = details

  return (
    <ProjectBasicWrapper>
      <GridFlex>
        <div>
          <h2>{title}</h2>
          <ProjectBasicDetails>
            <p>
              Completed in {year}
              {client ? ` for ${client}` : ' as a personal project'}.
            </p>
            <p>Role: {position}.</p>
          </ProjectBasicDetails>
        </div>
        <ButtonGroup>
          <Button to={website} variant="color" linksOut>
            Visit Site
          </Button>
          {repository && (
            <Button to={repository} type="ghost" linksOut>
              View Code
            </Button>
          )}
        </ButtonGroup>
      </GridFlex>
    </ProjectBasicWrapper>
  )
}

ProjectBasic.propTypes = {
  details: PropTypes.object,
}

export default ProjectBasic
