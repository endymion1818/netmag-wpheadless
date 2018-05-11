const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              template
              format
            }
          }
        }
      }
      `
    ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        
        const postTemplate = path.resolve(`./src/templates/post.js`)

        result.data.allWordpressPost.edges.forEach(edge  => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: postTemplate,
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
  })
}
