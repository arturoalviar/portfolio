import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Project } from '@components'

const ProjectCollection = ({ type }) => (
  <Container>
    <StaticQuery
      query={ProjectsQuery}
      render={data => {
        const projects = data.projects.edges

        return (
          <Grid>
            {projects.map((project, index) => (
              <Project
                key={`project-${project.node.id}`}
                id={`project-${project.node.id}`}
                index={index}
                details={project.node.frontmatter}
                excerpt={project.node.excerpt}
                type="card"
              />
            ))}
          </Grid>
        )
      }}
    />
  </Container>
)

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/index.md/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
            slug
            website
            image {
              childImageSharp {
                fluid(maxWidth: 540, quality: 80) {
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
export default ProjectCollection
