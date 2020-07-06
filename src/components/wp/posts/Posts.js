import React, { Component } from 'react';
import wp from '../../../wp-api/client';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        wp.posts().get()
        .then((response) => {
            this.setState({ posts: [ ...this.state.posts, ...response ]});
        })
        .catch( (error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>
                        My Posts
                    </h1>
                </div>
                <div className="row">
                    {this.state.posts.map( (post) => (
                        <article key={ post.id } className="col-12">
                            <h2>
                                <a href={post.link} target="_blank" rel="noopener noreferrer">{ post.title.rendered }</a>
                            </h2>
                            <div>
                                <label> Status { post.status }</label>
                            </div>
                            <div>
                                { post.excerpt.rendered.replace(/<(.|\n)*?>/g, '') }
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        )
    };
}

export default Posts;