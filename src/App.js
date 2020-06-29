import React from 'react';
import {Jumbotron, Menu, Footer} from './components/layout/';
import { PostForm } from './components/wp/';

function App() {
  return (
    <div className="App">
      <Menu />
      <Jumbotron />
      <PostForm />
      <Footer />
    </div>
  );
}

export default App;
