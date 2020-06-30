import React, { Component } from 'react';
// import { Tags, Categories } from '../';
import wp from '../../../wp-api/client';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            status: 'draft'
        }   
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleSavePost() {
        let post = {
            title: this.state.title,
            content: this.state.content,
            status: this.state.status,
        }

        wp.posts().create(post)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value,
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input placeholder="Post title" onChange={ e => this.handleTitleChange(e)}/>
                </div>
                <div onChange={this.handleStatusChange}>
                    <input type="radio" value="publish" name="status" /> Publish
                    <input type="radio" value="draft" name="status" /> Draft
                </div>
                <div>
                    <textarea placeholder="Post content" onChange={ e => this.handleContentChange(e) }/>
                </div>
                <div>
                    <button onClick={ () => this.handleSavePost() }>Save</button>
                </div>
            </div>
        )
    }
}

export default PostForm;