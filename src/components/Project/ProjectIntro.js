import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import { format } from 'date-fns'

import { Container, GridFlex, GridFlexItem, Title } from '@components'

import {
  ProjectIntroSection,
  ProjectMeta,
  ProjectMetaItem,
  ProjectMetaLabel,
  ProjectIntroHighlightImage,
} from '@styles/components/project/projectIntro'

const ProjectIntro = ({ details, meta }) => {
  const { completed, client, personalproject, role } = meta
  const { primary } = details
  const { title, content, imageSharp } = primary

  return (
    <ProjectIntroSection>
      <Container size="large">
        <ProjectIntroHighlightImage>
          <Img fluid={imageSharp.childImageSharp.fluid} />
        </ProjectIntroHighlightImage>
      </Container>
      <Container>
        <GridFlex justify="space-between">
          <GridFlexItem md="7">
            <Title>{title}</Title>
            <RichText render={content} />
          </GridFlexItem>
          <ProjectMeta>
            <ProjectMetaItem>
              <ProjectMetaLabel>Completed</ProjectMetaLabel>
              <div style={{ paddingLeft: '1.25rem' }}>
                {format(new Date(completed), 'yyyy')}
              </div>
            </ProjectMetaItem>
            <ProjectMetaItem>
              <ProjectMetaLabel>Client</ProjectMetaLabel>
              <div style={{ paddingLeft: '1.25rem' }}>
                {personalproject ? 'Personal Project' : client}
              </div>
            </ProjectMetaItem>
            <ProjectMetaItem>
              <ProjectMetaLabel>Role</ProjectMetaLabel>
              <div style={{ paddingLeft: '1.25rem' }}>{role}</div>
            </ProjectMetaItem>
          </ProjectMeta>
        </GridFlex>
      </Container>
    </ProjectIntroSection>
  )
}

ProjectIntro.propTypes = {
  details: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export default ProjectIntro
