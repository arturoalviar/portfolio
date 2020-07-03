import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'

import {
  Button,
  Container,
  GridFlex,
  GridFlexItem,
  Section,
  Title,
} from '@components'

import {
  ImageWrapper,
  ImageContainer,
  EndLinks,
} from '@styles/components/project/projectConclusion'

const ProjectConclusion = ({ details, variant, meta }) => {
  const { primary } = details
  const { title, content, imageSharp } = primary
  const { website, source } = meta

  return (
    <>
      <Section variant={variant}>
        <ImageContainer size="large">
          <ImageWrapper>
            <Img fluid={imageSharp.childImageSharp.fluid} />
          </ImageWrapper>
        </ImageContainer>
        <Container>
          <GridFlex align="center" justify="space-between">
            <GridFlexItem md="7">
              <Title>{title}</Title>
              <RichText render={content} />
            </GridFlexItem>
            <EndLinks>
              <Button to={website.url} hasIcon={true} variant="color" linksOut>
                View Website
              </Button>
              {source && (
                <Button to={source.url} linksOut>
                  View Code
                </Button>
              )}
            </EndLinks>
          </GridFlex>
        </Container>
      </Section>
    </>
  )
}

ProjectConclusion.defaultProps = {
  variant: 'default',
}

ProjectConclusion.propTypes = {
  details: PropTypes.object.isRequired,
  variant: PropTypes.string,
}

export default ProjectConclusion
