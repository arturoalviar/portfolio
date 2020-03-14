import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Container, Layout, Section, SEO } from '@components'
import {
  ResumeWrapper,
  ResumeGrid,
  ResumeHeader,
  ResumeBlock,
  ResumeSkill,
  PrintGlobalStyles,
} from '@styles/pages/resume'

const Resume = ({ data: { prismic } }) => {
  const {
    name,
    education,
    experience,
    projects,
    skills,
    links,
  } = prismic.resume

  return (
    <Layout hasFooter={false}>
      <PrintGlobalStyles />
      <SEO title="Resume" />
      <ResumeWrapper>
        <Section>
          <Container>
            <ResumeHeader>
              <h1>{name}</h1>
              <div className="resume-contact">
                <ul>
                  {links.map((item, index) => {
                    const {
                      link: { url },
                      label,
                    } = item
                    return (
                      <li key={`link-item-${index}`}>
                        <a href={url}>{label}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ResumeHeader>
            <ResumeGrid>
              <div className="resume-content-main">
                <ResumeBlock>
                  <h3>Education</h3>
                  {education.map((item, index) => {
                    const { name, location, degree, description } = item
                    return (
                      <div className="resume-item" key={`item-${index}`}>
                        <h5>
                          <strong>{name}</strong>, {location} — {degree}
                        </h5>
                        <RichText render={description} />
                      </div>
                    )
                  })}
                </ResumeBlock>
                <ResumeBlock>
                  <h3>Expereince</h3>
                  {experience.map((item, index) => {
                    const {
                      title,
                      position,
                      location,
                      description,
                      timeframe,
                    } = item
                    return (
                      <div className="resume-item" key={`item-${index}`}>
                        <h5>
                          <strong>{title}</strong>, {location} — {position}
                        </h5>
                        <div className="resume-item-subheading">
                          {timeframe}
                        </div>
                        <RichText render={description} />
                      </div>
                    )
                  })}
                </ResumeBlock>
              </div>
              <aside>
                <ResumeBlock>
                  <h3>Projects</h3>
                  {projects.map((project, index) => {
                    const { title, description } = project
                    return (
                      <div
                        className="resume-item-project"
                        key={`project-${index}`}
                      >
                        <h5>{title}</h5>
                        <RichText render={description} />
                      </div>
                    )
                  })}
                </ResumeBlock>
                <ResumeBlock>
                  <h3>Skills</h3>
                  {skills.map((item, index) => {
                    const { skill } = item
                    return (
                      <ResumeSkill key={`skill-${index}`}>{skill}</ResumeSkill>
                    )
                  })}
                </ResumeBlock>
              </aside>
            </ResumeGrid>
          </Container>
        </Section>
      </ResumeWrapper>
    </Layout>
  )
}

export const resumeQuery = graphql`
  query ResumeQuery {
    prismic {
      resume(lang: "en-us", uid: "resume") {
        name
        education {
          name
          location
          degree
          description
        }
        experience {
          title
          position
          location
          description
          timeframe
        }
        skills {
          skill
        }
        projects {
          title
          description
        }
        links {
          label
          link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
        }
      }
    }
  }
`

export default Resume
