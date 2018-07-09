import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes.js';

class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button>Edit Post</button>
        <button onClick={() => this.props.onDeletePost(this.props.id)}>
          Delete Post
        </button>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: id =>
      dispatch({ type: actionTypes.DELETE_POST, payload: { id: id } })
  };
};

export default connect(null, mapDispatchToProps)(Post);
