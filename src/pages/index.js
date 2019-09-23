import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
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

const Index = ({ data }) => {
  const projects = data.projects.edges

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
          {projects.map((project, index) => (
            <Project
              key={`project-${project.node.id}`}
              id={`project-${project.node.id}`}
              index={index}
              details={project.node.frontmatter}
              excerpt={project.node.excerpt}
            />
          ))}
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
    projects: allMarkdownRemark(
      limit: 3
      filter: {
        fileAbsolutePath: { regex: "/index.md/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
            slug
            year
            featured
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default Index
