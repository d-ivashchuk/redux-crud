import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import PostForm from './components/PostFrom/PostFrom.js';
import Posts from './components/Posts/Posts.js';

injectGlobal`
  body{
    margin:0;
    padding:0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PostForm />
        <Posts />
      </React.Fragment>
    );
  }
}

export default App;
