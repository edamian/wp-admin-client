import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  Posts,
  Categories,
  Tags,
  PostForm,
} from './components/wp';

import { Jumbotron } from './components/layout';
 
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Jumbotron} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/tags" component={Tags}/>
          <Route exact path="/posts/new" component={PostForm} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
