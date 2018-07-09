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
  }
  return state;
};

export default postReducer;
