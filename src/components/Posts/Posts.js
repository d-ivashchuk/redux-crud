import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from '../Post/Post.js';

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, null)(Posts);
