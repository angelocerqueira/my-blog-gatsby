const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 6) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            background
            category
            date(locale: "pt-br" formatString:  "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({node, next, previous}) => {
      createPage({
        // Path for this page — required
        path: `${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      })
    })
  const postsPerPage= 1;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      }
    })
  })

  })
}
