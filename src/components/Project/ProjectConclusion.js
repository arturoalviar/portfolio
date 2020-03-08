import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const ImageWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  ${props => props.theme.minMedia.md`
      box-shadow: 0 22px 44px rgba(0, 0, 0, 0.12);
  `}
`

const ImageContainer = styled(Container)`
  padding-bottom: ${props => props.theme.spacing.section.sm};
  ${props => props.theme.minMedia.sm`
    padding-bottom: ${props.theme.spacing.section.lg};
  `}
  ${props => props.theme.minMedia.lg`
    padding-bottom: ${props.theme.spacing.section.xl};
  `}
`

const EndLinks = styled.div`
  display: flex;
  flex-flow: column;
  padding-left: ${props => props.theme.gutter.grid};
  padding-right: ${props => props.theme.gutter.grid};
`

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
