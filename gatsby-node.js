const _ = require('lodash')
const moment = require('moment')
const siteConfig = require('./config/site')
// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

const projectsRegex = /projects\/[\w(\-)*]+\/index.md/

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === 'MarkdownRemark' &&
    projectsRegex.test(node.fileAbsolutePath)
  ) {
    const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
    if (!date.isValid) console.warn(`WARNING: Invalid date.`, node.frontmatter)

    createNodeField({
      node,
      name: 'date',
      value: date.toISOString(),
    })

    const slug = `${_.kebabCase(node.frontmatter.slug)}`

    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPage = require.resolve('./src/templates/project.js')

  const result = await wrapper(
    graphql(`
      {
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/index.md/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      }
    `)
  )
  const projects = result.data.projects.edges
  const length = projects.length

  projects.forEach(({ node }, index) => {
    const prev =
      index === 0 ? projects[length - 1].node : projects[index - 1].node
    const next =
      index === length - 1 ? projects[0].node : projects[index + 1].node

    createPage({
      path: node.fields.slug,
      component: projectPage,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: node.frontmatter.slug,
        prevTitle: prev.frontmatter.title,
        prevSlug: prev.fields.slug,
        nextTitle: next.frontmatter.title,
        nextSlug: next.fields.slug,
      },
    })
  })
}
