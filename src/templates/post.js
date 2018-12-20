import React from "react";
import Helmet from 'react-helmet'


const Post = ({ data }) => {
  const post = data.allPosts.edges[0].node;

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Helmet
        title={post.title}
        meta={[
          { name: 'description', content:  post.excerpt},
        ]}
      />
      <div style={{maxWidth: '800px'}}>
        <img src={post.featured_image} style={{width: '100%'}} /> 
        <div style={{display: 'flex'}}>
          <div style={{marginTop: '6rem', color: 'grey', lineHeight: '1.5rem', minWidth: '150px', textAlign: 'right'}}>
            {new Date(post.date_gmt).toDateString()}<br/>
            {post.category}
          </div>
          <div style={{flexGrow: 1, paddingLeft: '1rem'}}>
            <h1>{post.title}</h1>
            <div 
              className="dangerous-html"
              dangerouslySetInnerHTML={{
                __html: post.content
              }}
            />
          </div>
        </div>
      </div>
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
