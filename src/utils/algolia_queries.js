const postQuery = `{
 posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
    ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        id
        frontmatter {
          category
          date_timestamp: date
          date(locale: "pt-br" formatString:  "DD [de] MMMM [de] YYYY")
          background
          description
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => arr.map(({ node: { frontmatter, ...rest }}) => ({
  ...frontmatter,
  date_timestamp: parseInt(
    (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
  ),
  ...rest,

}))


const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
  },
];

module.exports = queries;
