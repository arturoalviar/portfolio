import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Project } from '@components'

const ProjectCollection = ({ type }) => (
  <Container>
    <StaticQuery
      query={`${ProjectsQuery}`}
      render={({ prismic }) => {
        const projects = prismic.projects.edges

        return (
          <Grid>
            {projects.map((project, index) => {
              const {
                title,
                _meta,
                tagline,
                website,
                imageSharp,
              } = project.node
              const details = {
                title,
                website,
                imageSharp,
                uid: _meta.uid,
              }
              return (
                <Project
                  key={`project-${_meta.uid}`}
                  id={`project-${_meta.uid}`}
                  index={index}
                  details={details}
                  excerpt={tagline}
                  type="card"
                />
              )
            })}
          </Grid>
        )
      }}
    />
  </Container>
)

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    prismic {
      projects: allProjects(sortBy: completed_DESC) {
        edges {
          node {
            title
            tagline
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
            website {
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
export default ProjectCollection
