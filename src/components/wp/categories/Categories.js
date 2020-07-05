import React, { Component } from 'react';
import wp from '../../../wp-api/client';

class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        wp.categories().get()
        .then((response) => {
            this.setState({ categories: [ ...this.state.categories, ...response]});
        })        
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        console.log(this.state.categories);
        return (
            <div className="container">
                <h1>Categories</h1>

                <div className="row">
                    <ul>
                        {this.state.categories.map( (category) => (
                            <li key={category.id}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    };
}

export default Categories;