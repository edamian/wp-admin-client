import React from 'react';
import {Jumbotron, Menu, Footer} from './components/layout/';
import { Posts, PostForm } from './components/wp/';

function App() {
  return (
    <div className="App">
      <Menu />
      <Jumbotron />
      <Posts />
      <PostForm />
      <Footer />
    </div>
  );
}

export default App;
