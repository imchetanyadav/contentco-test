import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  
  render() {
    const posts = this.props.data.allPosts.edges;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{maxWidth: '800px'}}>
          <h1>Article List</h1>
          {posts.map(({ node }) => {
            return (
              <div key={node.id} style={{display: 'flex', marginBottom: '2rem'}}>
                <div>
                  <img src={node.featured_image} style={{maxWidth: '250px'}} />
                </div>
                <div style={{paddingLeft: '2rem'}}>
                  <Link to={`/${node.slug}`} style={{textDecoration: 'none',color: '#000'}}>
                    <h2>{node.title}</h2>
                  </Link>
                  <p>{node.excerpt}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query RandomUserQuery {
    allPosts {
      edges {
        node {
          id
          title
          excerpt
          featured_image
          slug
        }
      }
    }
  }
`;