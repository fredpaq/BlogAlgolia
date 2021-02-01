exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/test/)) {
      page.matchPath = "/test/*"
  
      // Update the page.
      createPage(page)
    }
  }


  /////////permet de creer 
const { kMaxLength } = require('buffer')

const path = require('path')

  
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const BazarTemplate = path.resolve('src/helpers/bazar/bazarTemplate.js')
  
const bazar = await graphql(`
{
bazar:   allContentfulAlgolia {
    nodes {
      id
      slug
      title
    }
    totalCount
  }
}
  `).then((resultBazar) => {
      if (resultBazar.errors) {
        Promise.reject(resultBazar.errors)
      }
const bazar =  Math.floor(Math.random() * resultBazar.data.bazar.totalCount)
    resultBazar.data.bazar.nodes.forEach((k, id) => {
        createPage ({
          path: `/${k.title}/${id+1}`,
          component: BazarTemplate,
          context: {
            title: k.title,
            slug: k.slug,
            id:id,
          }
        })
    })
  })

    return Promise.all( [bazar])
}