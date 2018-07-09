import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes.js';

const StyledPost = styled.div`
  background: #fff;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 10px 10px 12px 0 rgba(46, 60, 73, 0.05);
`;
const StyledEditButton = styled.button`
  background: #02b3e4;
  border: none;
  text-align: center;
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: auto;
  outline: none;
  color: #fff;
  margin-right: 10px;
`;
const StyledDeleteButton = styled.button`
  background: #ff7777;
  border: none;
  text-align: center;
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  color: #fff;
`;

class Post extends Component {
  render() {
    return (
      <StyledPost>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
        <StyledEditButton
          onClick={() => this.props.onEditPost(this.props.post.id)}>
          Edit Post
        </StyledEditButton>
        <StyledDeleteButton
          onClick={() => this.props.onDeletePost(this.props.post.id)}>
          Delete Post
        </StyledDeleteButton>
      </StyledPost>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: id =>
      dispatch({ type: actionTypes.DELETE_POST, payload: { id: id } }),
    onEditPost: id =>
      dispatch({ type: actionTypes.EDIT_POST, payload: { id: id } })
  };
};

export default connect(null, mapDispatchToProps)(Post);
