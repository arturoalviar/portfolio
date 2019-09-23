import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, ProjectBasic } from '@components'

const ProjectAdditionalCollection = ({ type }) => (
  <Container>
    <StaticQuery
      query={ProjectsAdditionalQuery}
      render={({ allProjectsJson }) => {
        const { id, otherProjects } = allProjectsJson.edges[0].node

        return (
          <>
            {otherProjects.map((project, index) => (
              <ProjectBasic key={`project-${id}-${index}`} details={project} />
            ))}
          </>
        )
      }}
    />
  </Container>
)

export const ProjectsAdditionalQuery = graphql`
  query ProjectsAdditionalQuery {
    allProjectsJson {
      edges {
        node {
          id
          otherProjects {
            title
            client
            position
            year
            website
            repository
          }
        }
      }
    }
  }
`
export default ProjectAdditionalCollection
