import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

import PostForm from './components/PostFrom/PostFrom.js';
import Posts from './components/Posts/Posts.js';

injectGlobal`
  body{
    margin:0;
    padding:0;
    font-family: 'Work Sans', sans-serif;
    background: #f4f4ef
  }
`;
const StyledNav = styled.nav`
  text-align: center;
  font-size: 2rem;
  padding: 30px;
  background: #10aded;
  color: white;
  box-shadow: 0 5px 15px 0 rgba(46, 61, 73, 0.12);
  > h2 {
    margin: 0;
    font-weight: 200;
    font-size: 30px;
    letter-spacing: 3px;
    font-family: 'Work Sans', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledNav>
          <h2>CRUD app</h2>
        </StyledNav>
        <PostForm />
        <Posts />
      </React.Fragment>
    );
  }
}

export default App;
