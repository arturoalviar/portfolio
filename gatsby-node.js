// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPage = require.resolve('./src/templates/project.js')

  const result = await wrapper(
    graphql(`
      {
        prismic {
          projects: allProjects(sortBy: completed_DESC) {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const projects = result.data.prismic.projects.edges
  const length = projects.length

  projects.forEach(({ node }, index) => {
    const prev =
      index === 0 ? projects[length - 1].node : projects[index - 1].node
    const next =
      index === length - 1 ? projects[0].node : projects[index + 1].node

    createPage({
      path: node._meta.uid,
      component: projectPage,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        uid: node._meta.uid,
        prevNode: prev._meta.uid,
        nextNode: next._meta.uid,
      },
    })
  })
}
