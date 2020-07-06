import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
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
    );
}

export default Navbar;