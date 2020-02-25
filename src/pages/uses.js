import React, { useEffect } from 'react'
import styled from 'styled-components'
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

const usesTagline = 'A list of the tools and gear I use on a daily basis.'

const Uses = ({ data }) => {
  const themeToggle = useThemeWrapper()
  // will move this logic into its own component if I need it for a different page
  useEffect(() => {
    themeToggle.updateNavMode('dark')
    return () => {
      themeToggle.updateNavMode('light')
    }
  }, [themeToggle])

  return (
    <Layout>
      <SEO title="Uses" description={usesTagline} />
      <Banner title="Every dev has their arsenal" variant="inverse">
        <h4>{usesTagline}</h4>
      </Banner>
      <Section variant="inverse">
        <Container>
          <UsesDiv>
            <h2>Editor + Terminal</h2>
            <ul>
              <li>
                Atom - I have been using Atom since my junior year of college
                (2013). I am also biased since I've made a number of themes for
                Atom.
              </li>
              <li>
                Visual Studio Code - If for some reason I can't use Atom, Code
                is a great alternative. One of the advantages it has over Atom
                is that it does not crash when opening a big file.
              </li>
              <li>
                Hyper - I use to only use iTerm 2 but the ease of customization
                makes Hyper my goto terminal app.
              </li>
            </ul>
          </UsesDiv>
          <UsesDiv>
            <h2>Desktop Apps</h2>
            <ul>
              <li>
                f.lux - MacOS now has the functionality of f.lux built in but I
                prefer the app since it is slightly more customizable.
              </li>
              <li>
                Sketch - I have been using Sketch since 2015 and it is my goto
                whenever I want to design something.
              </li>
              <li>
                Photoshop - I learned how to use Photoshop in high school in
                order to work on some projects for AP Art and since have become
                fairly comfortable with it. Now, I mainly use it to enhance
                photos.
              </li>
            </ul>
          </UsesDiv>
          <UsesDiv>
            <h2>Dev Battlestation</h2>
            <ul>
              <li>Laptop - 2017 15 inch Macbook Pro</li>
              <li>Monitor - LG 32 4k UD99W</li>
              <li>Speakers - Kanto YU 5</li>
              <li>
                Keyboard - RAMA M-60a, Tokyo60, or RGBKB Sol 2 (depends on the
                day)
              </li>
              <li>Mouse - Logitech MX Master v1</li>
              <li>Chair - Steelcase Series 1</li>
              <li>Desk - IKEA Kitchen counter top</li>
            </ul>
          </UsesDiv>
        </Container>
      </Section>
    </Layout>
  )
}

export default Uses
