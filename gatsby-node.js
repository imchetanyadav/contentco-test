const axios = require('axios');
const crypto = require('crypto');
const path = require("path");

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.

  // fetch raw data from the techinasia post api
  const fetchData = () => axios.get(`https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10`);
  // await for results
  const res = await fetchData()

  // map into these results and create nodes
  res.data.posts.map((post, i) => {
    // Create your node object
    const postNode = {
      // Required fields
      id: `${post.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Posts`, // name of the graphQL query --> allPosts {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      date_gmt: post.date_gmt,
      modified_gmt: post.modified_gmt,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      featured_image: post.featured_image.source,
      category: post.categories[0].slug
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(postNode))
      .digest(`hex`);
    // add it to postNode
    postNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(postNode);
  });

  // We're done, return.
  return;
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPosts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allPosts.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
};