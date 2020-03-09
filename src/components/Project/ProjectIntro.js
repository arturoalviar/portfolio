import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import { withPrefix } from 'gatsby'
import { format } from 'date-fns'

import { Container, GridFlex, GridFlexItem, Title } from '@components'
import Section from '@components/Section'

import { smallText } from '@styles/typography'
import linkCss from '@styles/links'

const ProjectIntroSection = styled(Section)`
  position: relative;
  a {
    ${linkCss}
    line-height: 1;
  }
`

const ProjectMeta = styled.div`
  position: relative;
  padding-left: ${props => props.theme.gutter.grid};
  padding-right: ${props => props.theme.gutter.grid};
`

const ProjectMetaItem = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.gutter.grid};
`

const ProjectMetaLabel = styled.p`
  ${smallText}
  color: ${props =>
    props.theme.mode === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.darkText};
  line-height: 1;
  position: relative;
  margin-bottom: 0.5em;
  padding-left: ${props => props.theme.mixins.remCalc(20)};
  &:before {
    background: ${props => props.theme.colors.main};
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 8px;
    margin-top: 3px;
    transform: translateY(-50%);
  }
`

const ProjectIntroHighlightImage = styled.div`
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
  position: relative;
  margin-top: -${props => props.theme.mixins.remCalc(56)};
  margin-bottom: ${props => props.theme.spacing.section.sm};
  z-index: 1;
  ${props => props.theme.minMedia.sm`
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.06);
    margin-top: -${props.theme.mixins.remCalc(112)};
    margin-bottom: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.md`
    margin-top: -${props.theme.mixins.remCalc(224)};
  `}
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -22px;
    right: -15px;
    background-repeat: repeat;
    background-size: 25px;
    background-position: top left;
    background-image: url(${withPrefix('aa-texture.svg')});
    opacity: 0.1;
    width: 70%;
    height: 160px;
    z-index: -1;
    ${props => props.theme.minMedia.md`
      top: -60px;
      right: -30px;
      width: 50%;
      height: 360px;
    `}
  }
`

const ProjectIntro = ({ children, details, meta, variant }) => {
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
