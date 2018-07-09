import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from '../Post/Post.js';
import EditPost from '../EditPost/EditPost.js';

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.posts.map(
          post =>
            post.editing ? (
              <EditPost key={post.id} post={post} />
            ) : (
              <Post key={post.id} post={post} />
            )
        )}
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
