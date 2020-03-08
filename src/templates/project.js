import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import {
  Button,
  Layout,
  ProjectIntro,
  ProjectHighlight,
  ProjectConclusion,
  ProjectPagination,
  SEO,
} from '@components'
import Banner from '@components/Banner'

const Project = ({
  data: {
    prismic: { project, prevNode, nextNode },
  },
}) => {
  const {
    title,
    tagline,
    body,
    completed,
    client,
    personalproject,
    role,
    website,
    source,
  } = project
  const {
    title: nextTitle,
    _meta: { uid: nextUid },
  } = nextNode
  const {
    title: prevTitle,
    _meta: { uid: prevUid },
  } = prevNode
  const introMeta = {
    completed,
    client,
    personalproject,
    role,
  }
  const conclusionMeta = {
    website,
    source,
  }
  const introDetails = body[0]
  const highlightDetails = body[1]
  const conclusionDetails = body[2]

  return (
    <Layout>
      <SEO title={title} description={tagline} />
      <Helmet>
        <body className="aa-project-page" />
      </Helmet>
      <Banner title={title} spacing={150} variant="color">
        <h4>{tagline}</h4>
        <Button to={website.url} hasIcon={true} linksOut>
          See Website
        </Button>
      </Banner>
      <ProjectIntro details={introDetails} meta={introMeta} />
      <ProjectHighlight details={highlightDetails} />
      <ProjectConclusion details={conclusionDetails} meta={conclusionMeta} />
      <ProjectPagination
        prevSlug={prevUid}
        prevTitle={prevTitle}
        nextSlug={nextUid}
        nextTitle={nextTitle}
      />
    </Layout>
  )
}

export default Project

export const projectQuery = graphql`
  query($uid: String!, $prevNode: String!, $nextNode: String!) {
    prismic {
      project(lang: "en-us", uid: $uid) {
        title
        tagline
        completed
        client
        personalproject
        role
        website {
          ... on PRISMIC__ExternalLink {
            url
          }
        }
        source {
          ... on PRISMIC__ExternalLink {
            url
          }
        }
        body {
          ... on PRISMIC_ProjectBodyIntro {
            primary {
              title
              content
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ... on PRISMIC_ProjectBodyHighlight {
            primary {
              title
              content
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              tool
            }
          }
          ... on PRISMIC_ProjectBodyConclusion {
            primary {
              title
              content
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      prevNode: project(lang: "en-us", uid: $prevNode) {
        title
        _meta {
          uid
        }
      }
      nextNode: project(lang: "en-us", uid: $nextNode) {
        title
        _meta {
          uid
        }
      }
    }
  }
`
