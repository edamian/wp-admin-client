import React, { Component } from 'react';
import { Tags, Categories } from '../';

class PostForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <input placeholder="Post title"/>
                    </div>
                    <div>
                        <textarea placeholder="Post content"/>
                    </div>
                </div>
                <div>
                    <div>
                        <Categories />
                    </div>
                    <div>
                        <Tags />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm;