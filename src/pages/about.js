import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const aboutTagline =
  'I am a front end web developer from Los Angeles now based in New York. I love UX/UI design, anime, video games, and mechs (keyboards — not the robots).'

const About = ({ data }) => (
  <Layout>
    <SEO title="About" description={aboutTagline} />
    <Banner title="Hola. I am Arturo 👋🏽" variant="mono">
      <h4>{aboutTagline}</h4>
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
      <AboutContainer>
        <AboutGrid justify="center">
          <GridFlexItem md="8">
            <Title>who is arturo?</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: data.aboutJson.bio.childMarkdownRemark.html,
              }}
            />
          </GridFlexItem>
        </AboutGrid>
      </AboutContainer>
      <AboutContainer>
        <GridFlex justify="center">
          <GridFlexItem md="8">
            <Title>what i do and my process</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: data.aboutJson.work.childMarkdownRemark.html,
              }}
            />
          </GridFlexItem>
        </GridFlex>
      </AboutContainer>
    </Section>

    <Section variant="inverse">
      <Container>
        <AboutImageWrapper>
          <Img
            fluid={data.aboutJson.images.switch.childImageSharp.fluid}
            alt="switch"
          />
        </AboutImageWrapper>
      </Container>
      <AboutContainer>
        <AboutGrid justify="center">
          <GridFlexItem md="7">
            <Title>anime and gaming</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: data.aboutJson.hobbies.childMarkdownRemark.html,
              }}
            />
          </GridFlexItem>
        </AboutGrid>
      </AboutContainer>
      <Container>
        <AboutImageWrapper>
          <Img
            fluid={data.aboutJson.images.serika.childImageSharp.fluid}
            alt="RAMA m60-a - GMK Serika"
          />
        </AboutImageWrapper>
      </Container>
      <AboutContainer>
        <GridFlex justify="center">
          <GridFlexItem md="7">
            <Title>A dev needs a mech</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: data.aboutJson.mk.childMarkdownRemark.html,
              }}
            />
          </GridFlexItem>
        </GridFlex>
      </AboutContainer>
    </Section>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    aboutJson {
      bio {
        childMarkdownRemark {
          html
        }
      }
      hobbies {
        childMarkdownRemark {
          html
        }
      }
      mk {
        childMarkdownRemark {
          html
        }
      }
      work {
        childMarkdownRemark {
          html
        }
      }
      images {
        serika {
          childImageSharp {
            fluid(maxWidth: 1120, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        switch {
          childImageSharp {
            fluid(maxWidth: 1120, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
