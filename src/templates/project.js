import React from 'react'
import { graphql } from 'gatsby'
import {
  Button,
  Layout,
  ProjectConclusion,
  ProjectIntro,
  ProjectHighlight,
  ProjectPagination,
  SEO,
} from '@components'
import Banner from '@components/Banner'

const Project = ({
  pageContext: { prevSlug, prevTitle, nextTitle, nextSlug },
  data: { markdownRemark: postNode, intro, middle, conclusion },
}) => {
  const { excerpt } = postNode
  const { title, website } = postNode.frontmatter

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Banner title={title} spacing={150} variant="color">
        <h4>{excerpt}</h4>
        <Button to={website} hasIcon={true} linksOut>
          See Website
        </Button>
      </Banner>

      <ProjectIntro details={intro} meta={postNode.frontmatter} />
      <ProjectHighlight details={middle} />
      <ProjectConclusion details={conclusion} meta={postNode.frontmatter} />

      <ProjectPagination
        prevSlug={prevSlug}
        prevTitle={prevTitle}
        nextSlug={nextSlug}
        nextTitle={nextTitle}
      />
    </Layout>
  )
}

export default Project

export const projectQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/index.md/" }
    ) {
      fields {
        date
        slug
      }
      frontmatter {
        title
        position
        website
        repository
        year
        client
      }
      excerpt
    }
    intro: markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/intro.md/" }
    ) {
      frontmatter {
        title
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    middle: markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/middle.md/" }
    ) {
      frontmatter {
        title
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack
      }
      html
    }
    conclusion: markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/conclusion.md/" }
    ) {
      frontmatter {
        title
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
