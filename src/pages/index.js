import React from 'react'

class IndexPage extends React.Component {
  
  render() {
    const posts = this.props.data.allPosts.edges;
    
    return (
      <div>
        Article List
        {posts.map(({ node }) => {
          return (
            <div key={node.id}>
              <p>Title: {node.title}</p>
              {/* <img src={userData.picture.medium} /> */}
            </div>
          )
        })}
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
        }
      }
    }
  }
`;