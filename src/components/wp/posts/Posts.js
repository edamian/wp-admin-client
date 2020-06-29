import React, { Component } from 'react';

class Posts extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        Posts list
                    </div>
                    <div>
                        <button>+</button>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Post 1</li>
                        <li>Post 2</li>
                        <li>Post 3</li>
                        <li>Post 4</li>
                        <li>Post 5</li>
                    </ul>
                </div>
            </div>
        )
    };
}

export default Posts;