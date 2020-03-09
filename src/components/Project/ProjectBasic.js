import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { format } from 'date-fns'

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
  const {
    title,
    role,
    personalproject,
    link,
    completed,
    client,
    source,
  } = details

  return (
    <ProjectBasicWrapper>
      <GridFlex>
        <div>
          <h2>{title}</h2>
          <ProjectBasicDetails>
            <p>
              Completed in {format(new Date(completed), 'yyyy')}
              {personalproject ? ' as a personal project' : ` for ${client}`}.
            </p>
            <p>Role: {role}.</p>
          </ProjectBasicDetails>
        </div>
        <ButtonGroup>
          {link && (
            <Button to={link.url} variant="color" linksOut>
              Visit Site
            </Button>
          )}
          {source && (
            <Button to={source.url} type="ghost" linksOut>
              View Code
            </Button>
          )}
        </ButtonGroup>
      </GridFlex>
    </ProjectBasicWrapper>
  )
}

ProjectBasic.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    personalproject: PropTypes.bool.isRequired,
    client: PropTypes.string,
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    source: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }),
}

export default ProjectBasic
