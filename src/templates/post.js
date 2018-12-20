import React from "react";
import Helmet from 'react-helmet'


const Post = ({ data }) => {
  const post = data.allPosts.edges[0].node;

  return (
    <div>
      <Helmet
        title={post.title}
        meta={[
          { name: 'description', content:  post.excerpt},
        ]}
      />
      {post.title}
    </div>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    allPosts(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          title
          excerpt
          featured_image
          date_gmt
          category
          content
        }
      }
    }
  }
`;
