import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes.js';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px;
  width: 40vw;
  margin: 40px auto;
  box-shadow: 0 5px 15px 0 rgba(46, 61, 73, 0.12);
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  > * {
    margin-bottom: 1em;
  }
  > input {
    height: 44px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid #dbe2e8;
    font-size: 14px;
    border-radius: 2px;
    color: #636363;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline: none;
    width: 80%;
  }
  > textarea {
    width: 80%;
    max-width: 80%;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    border: 1px solid #dbe2e8;
    font-size: 14px;
    border-radius: 2px;
    color: #636363;
    font-family: 'Work Sans,', sans-serif;
    box-shadow: 0 2px 2px 0 rgba(46, 60, 73, 0.05);
    outline: none;
  }
  > button {
    background: #02b3e4;
    padding: 10px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    border-radius: 4px;
    border: none;
    font-size: 20px;
    &:hover {
      background: #ff7777;
      cursor: pointer;
    }
  }
`;

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    editing: false
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
        <StyledForm>
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
              this.props.onCreatePost(
                this.state.title,
                this.state.body,
                this.state.editing
              )
            }>
            Create post
          </button>
        </StyledForm>
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
    onCreatePost: (title, body, editing) =>
      dispatch({
        type: actionTypes.ADD_POST,
        payload: {
          title: title,
          body: body,
          id: new Date().getTime(),
          editing: editing
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
