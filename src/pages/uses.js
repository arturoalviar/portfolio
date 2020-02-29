import React, { useEffect } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Banner, Container, Layout, Section, SEO } from '@components'
import { useThemeWrapper } from '@components/ThemeContext'

const UsesDiv = styled.div`
  max-width: 80ch;
  margin-bottom: 4rem;
  h2 {
    margin-bottom: 0.35em;
  }
  ul {
    list-style-position: outside;
    padding: 0 20px;
  }
`

const Uses = ({ data: { prismic } }) => {
  const themeToggle = useThemeWrapper()
  // will move this logic into its own component if I need it for a different page
  useEffect(() => {
    themeToggle.updateNavMode('dark')
    return () => {
      themeToggle.updateNavMode('light')
    }
  }, [themeToggle])

  const { title, tagline, sections } = prismic.uses

  return (
    <Layout>
      <SEO title="Uses" description={tagline} />
      <Banner title={title[0].text} variant="inverse">
        <h4>{tagline}</h4>
      </Banner>
      <Section variant="inverse">
        <Container>
          {sections.map((section, index) => {
            const { content } = section
            return (
              <UsesDiv key={`uses-div-${index}`}>
                <RichText render={content} />
              </UsesDiv>
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}

export const usesQuery = graphql`
  query UsesQuery {
    prismic {
      uses(lang: "en-us", uid: "uses") {
        title
        tagline
        sections {
          content
        }
      }
    }
  }
`

export default Uses
