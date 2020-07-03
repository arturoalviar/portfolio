import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'

import { Container, GridFlex, GridFlexItem, Title } from '@components'

import {
  HighlightSection,
  ImageWrapper,
  ImageContainer,
  Skill,
  SkillContainer,
} from '@styles/components/project/projectHighlight'

const renderTools = (fields, index) => <Skill key={index}>{fields.tool}</Skill>

const ProjectHighlight = ({ details, variant }) => {
  const { primary, fields } = details
  const { title, content, imageSharp } = primary

  return (
    <HighlightSection variant={variant}>
      <ImageContainer size="large">
        <ImageWrapper>
          <Img fluid={imageSharp.childImageSharp.fluid} />
        </ImageWrapper>
      </ImageContainer>
      <SkillContainer>
        <h5>made with</h5>
        <GridFlex justify="center">{fields.map(renderTools)}</GridFlex>
      </SkillContainer>
      <Container>
        <GridFlex align="center" justify="center">
          <GridFlexItem md="7">
            <Title>{title}</Title>
            <RichText render={content} />
          </GridFlexItem>
        </GridFlex>
      </Container>
    </HighlightSection>
  )
}

ProjectHighlight.propTypes = {
  details: PropTypes.object.isRequired,
  variant: PropTypes.string,
}
ProjectHighlight.defaultProps = {
  variant: 'mono',
}

export default ProjectHighlight
