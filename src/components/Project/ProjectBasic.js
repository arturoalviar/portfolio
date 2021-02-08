import React from 'react'
import PropTypes from 'prop-types'

import { Button, GridFlex } from '@components'

import {
  ProjectBasicWrapper,
  ProjectBasicDetails,
  ButtonGroup,
} from '@styles/components/project/projectBasic'

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
  const completedDate = new Date(completed)

  return (
    <ProjectBasicWrapper>
      <GridFlex>
        <div>
          <h2>{title}</h2>
          <ProjectBasicDetails>
            <p>
              Completed in{' '}
              {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
                completedDate
              )}
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
