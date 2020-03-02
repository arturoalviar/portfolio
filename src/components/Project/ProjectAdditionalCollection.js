import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, ProjectBasic } from '@components'

const ProjectAdditionalCollection = () => (
  <Container>
    <StaticQuery
      query={`${ProjectsAdditionalQuery}`}
      render={({
        prismic: {
          allBasicProjects: { edges },
        },
      }) => {
        return (
          <>
            {edges.map(({ node: details }, index) => (
              <ProjectBasic key={`project-${index}`} details={details} />
            ))}
          </>
        )
      }}
    />
  </Container>
)

export const ProjectsAdditionalQuery = graphql`
  query ProjectsAdditionalQuery {
    prismic {
      allBasicProjects(sortBy: completed_DESC) {
        edges {
          node {
            title
            role
            personalproject
            link {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            completed
            client
            source {
              ... on PRISMIC__ExternalLink {
                url
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectAdditionalCollection
