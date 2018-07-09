import * as actionTypes from '../actions/actionTypes.js';

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };

    case actionTypes.DELETE_POST:
      const updatedArray = state.posts.filter(
        post => post.id !== action.payload.id
      );
      return {
        ...state,
        posts: updatedArray
      };
    case actionTypes.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(
          post =>
            post.id === action.payload.id
              ? { ...post, editing: !post.editing }
              : post
        )
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              title: action.payload.title,
              body: action.payload.body,
              editing: !post.editing
            };
          } else return post;
        })
      };
  }
  return state;
};

export default postReducer;
