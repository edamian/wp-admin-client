import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Posts,
    Categories,
    Tags
} from '../wp';

import Jumbotron from './Jumbotron';

const Menu = () => {
    return (
        <Router>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/categories" className="nav-link">Categories</Link>
                </li>   
                <li className="nav-item">
                    <Link to="/tags" className="nav-link">Tags</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/categories">
                    <Categories />
                </Route>
                <Route path="/tags">
                    <Tags />
                </Route>
                <Route>
                    <Jumbotron />
                </Route>
            </Switch>
        </Router>
    );
}

export default Menu;