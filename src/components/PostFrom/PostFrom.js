import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes.js';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };
  onTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  onBodyChange = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>New Post</h1>

        <input
          value={this.state.title}
          onChange={this.onTitleChange}
          required
          type="text"
          placeholder="Enter post title"
        />
        <textarea
          onChange={this.onBodyChange}
          value={this.state.body}
          required
          placeholder="Enter post"
          cols="30"
          rows="5"
        />
        <button
          onClick={() =>
            this.props.onCreatePost(this.state.title, this.state.body)
          }>
          Create post
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCreatePost: (title, body) =>
      dispatch({
        type: actionTypes.ADD_POST,
        payload: {
          title: title,
          body: body,
          id: new Date().getTime()
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
