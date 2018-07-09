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
  >button{

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
`;

class EditPost extends Component {
  state = {
    newTitle: '',
    newBody: ''
  };

  onNewTitleChange = event => {
    this.setState({ newTitle: event.target.value });
  };
  onNewBodyChange = event => {
    this.setState({ newBody: event.target.value });
  };
  render() {
    return (
      <StyledForm>
        <h2>Edit post</h2>
        <input required type="text" onChange={this.onNewTitleChange} />
        <textarea
          required
          cols="30"
          rows="10"
          placeholder="Enter update"
          onChange={this.onNewBodyChange}
        />
        <button
          onClick={() =>
            this.props.onUpdatePost(
              this.state.newTitle,
              this.state.newBody,
              this.props.post.id
            )
          }>
          Update
        </button>
      </StyledForm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePost: (newTitle, newBody, id) =>
      dispatch({
        type: actionTypes.UPDATE_POST,
        payload: {
          title: newTitle,
          body: newBody,
          id: id
        }
      })
  };
};

export default connect(null, mapDispatchToProps)(EditPost);
