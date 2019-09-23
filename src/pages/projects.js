import React from 'react'
import { Button, Banner, Layout, ProjectPageContent, SEO } from '@components'

const projectsTagline =
  'Every project is crafted with care and serves as a learning experience.'

const Projects = () => (
  <Layout>
    <SEO title="Projects" description={projectsTagline} />
    <Banner title="Contributing to the web" variant="mono">
      <h4>{projectsTagline}</h4>
      <Button
        to="mailto:yo@arturoalviar.com?subject=Hey Arturo, let's work together!"
        hasIcon={true}
        variant="color"
        isEmail
      >
        Work with me
      </Button>
    </Banner>
    <ProjectPageContent />
  </Layout>
)

export default Projects
