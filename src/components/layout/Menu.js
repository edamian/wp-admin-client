import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Posts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tags</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;