import React, { Component } from 'react';
import wp from '../../../wp-api/client';

class Tags extends Component {
    
    state = {
        tags: []
    }

    componentDidMount() {
        wp.tags().get() 
        .then((response) => {
            this.setState({ tags: [...this.state.tags, ...response ]})
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        console.log(this.state.tags);
        return (
            <div className="container">
                <h1>Tags</h1>

                <div className="row">
                    <ul>
                        {this.state.tags.map( (tag) => (
                            <li key={tag.id}>
                                {tag.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Tags;