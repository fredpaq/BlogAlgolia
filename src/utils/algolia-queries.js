const indexName = "blogAlgolia"

const pageQuery = 
`{
  titl: allSitePage {
    nodes {
      id
      path
      isCreatedByStatefulCreatePages
      context {
        title
        slug
        id
      }
    }
  }
}`

// nom de gauche est le nom choisi par moi 

function pageToAlgoliaRecord( { id, path, context, isCreatedByStatefulCreatePages } ) {
    return {
    id  : id,
    path: path,
    context: context,
    build:  isCreatedByStatefulCreatePages
    }
  }

const queries=[
  {
    // query:blogQuery,
    query: pageQuery,
    transformer: ({ data }) => data.titl.nodes.map(pageToAlgoliaRecord),  
    indexName,
  }
]

module.exports = queries