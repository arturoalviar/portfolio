import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import {
  Banner,
  Button,
  Container,
  Layout,
  GridFlex,
  GridFlexItem,
  Section,
  SEO,
  Title,
} from '@components'
import linkCss from '@styles/links'
import { socialLinks } from 'config/vars'

const AboutContainer = styled(Container)`
  a {
    ${linkCss}
    line-height: 1;
  }
`

const AboutGrid = styled(GridFlex)`
  padding-bottom: ${props => props.theme.spacing.section.md};
`
const AboutImageWrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing.section.md};
`

const About = ({ data }) => {
  const { about } = data.prismic
  const { title, tagline, intro, hobbies } = about

  return (
    <Layout>
      <SEO title="About" description={tagline} />
      <Banner title={title[0].text} variant="mono">
        <h4>{tagline}</h4>
        <Button
          to={socialLinks.linkedin.link}
          variant="color"
          hasIcon={true}
          linksOut
        >
          LinkedIn Resume
        </Button>
      </Banner>
      <Section>
        {intro.map((item, index) => {
          const { heading, content } = intro[index]
          return (
            <AboutContainer key={`intro-${index}`}>
              <AboutGrid justify="center">
                <GridFlexItem md="8">
                  <Title>{heading}</Title>
                  <RichText render={content} />
                </GridFlexItem>
              </AboutGrid>
            </AboutContainer>
          )
        })}
      </Section>
      <Section variant="inverse">
        {hobbies.map((hobby, index) => {
          const { heading, content, imageSharp } = hobby
          console.log(imageSharp)
          return (
            <>
              <Container>
                <AboutImageWrapper>
                  <Img fluid={imageSharp.childImageSharp.fluid} />
                </AboutImageWrapper>
              </Container>
              <AboutContainer>
                <AboutGrid justify="center">
                  <GridFlexItem md="7">
                    <Title>{heading}</Title>
                    <RichText render={content} />
                  </GridFlexItem>
                </AboutGrid>
              </AboutContainer>
            </>
          )
        })}
      </Section>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    prismic {
      about(lang: "en-us", uid: "about") {
        title
        tagline
        intro {
          heading
          content
        }
        hobbies {
          heading
          content
          image
          imageSharp {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1120, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default About
