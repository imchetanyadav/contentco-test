import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  state = {
    category: ''
  }

  handleCategoryChange = e => {
    this.setState({ category: e.target.value })
  }
  render() {
    const posts = this.props.data.allPosts.edges;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{maxWidth: '800px'}}>
          <h1>Article List</h1>
          <select style={{marginBottom: '1.5rem'}} onChange={this.handleCategoryChange}>
            <option value="branded-content">Branded Content</option>
            <option value="news">News</option>
            <option value="e-commerce-social-commerce">E-Commerce Social-Commerce</option>
            <option value="brief">Brief</option>
            <option value="acquisitions">Acquisitions</option>
          </select>
          {posts.filter(({node}) => node.category.includes(this.state.category)).map(({ node }) => {
            return (
              <div key={node.id} style={{display: 'flex', marginBottom: '2rem'}}>
                <div>
                  <img src={node.featured_image} style={{maxWidth: '250px'}} />
                </div>
                <div style={{paddingLeft: '2rem'}}>
                  <Link to={`/${node.slug}`} style={{textDecoration: 'none',color: '#000'}}>
                    <h2>{node.title}</h2>
                  </Link>
                  <p>{node.category}</p>
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
          category
          featured_image
          slug
        }
      }
    }
  }
`;