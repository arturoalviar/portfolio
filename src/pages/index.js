import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import {
  Banner,
  Button,
  Container,
  Layout,
  Project,
  Section,
} from '@components'

const ProjectsHeader = styled.div`
  margin-bottom: ${props => props.theme.mixins.remCalc(60)};
  text-align: center;
  ${props => props.theme.minMedia.md`
    margin-bottom: ${props.theme.spacing.section.xl};
  `}
`

const Index = ({ data: { prismic } }) => {
  const projects = prismic.projects.edges

  return (
    <Layout>
      <Banner
        variant="mono"
        title="I am a front end web developer & more"
        subTitle="hello, world"
      >
        <h4>
          I am passionate about web development, like solving problems, and
          making the Internet a more beautiful place.
        </h4>
        <Button variant="color" to="/projects" hasIcon={true}>
          See Work
        </Button>
      </Banner>
      <Section>
        <Container>
          <ProjectsHeader>
            <h4 style={{ fontWeight: '900' }}>Featured Projects</h4>
          </ProjectsHeader>
          {projects.map((project, index) => {
            const { title, _meta, imageSharp } = project.node
            const details = {
              title,
              imageSharp,
              uid: _meta.uid,
            }
            return (
              <Project
                key={`project-${_meta.uid}`}
                id={`project-${_meta.uid}`}
                index={index}
                details={details}
              />
            )
          })}
          <div style={{ textAlign: 'center' }}>
            <Button to="/projects" type="ghost" hasIcon={true}>
              All Projects
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export const projectQuery = graphql`
  query IndexQuery {
    prismic {
      projects: allProjects(first: 3, where: { featured: true }) {
        edges {
          node {
            title
            _meta {
              uid
            }
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 720, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
