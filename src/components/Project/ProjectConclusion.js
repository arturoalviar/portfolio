import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
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
  const { heading } = details.frontmatter
  const { website, repository } = meta
  const { fluid } = details.frontmatter.image.childImageSharp
  const { html } = details

  return (
    <>
      <Section variant={variant}>
        <ImageContainer size="large">
          <ImageWrapper>
            <Img fluid={fluid} />
          </ImageWrapper>
        </ImageContainer>
        <Container>
          <GridFlex align="center" justify="space-between">
            <GridFlexItem md="7">
              <Title>{heading}</Title>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </GridFlexItem>
            <EndLinks>
              <Button to={website} hasIcon={true} variant="color" linksOut>
                View Website
              </Button>
              {repository && (
                <Button to={repository} linksOut>
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
