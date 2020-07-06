import React, { Component } from 'react';
import wp from '../../../wp-api/client';
import { Link } from 'react-router-dom';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            status: 'draft',
            categories: [],
            tags: [],
            category: 0,
            tag: 0,
        }   
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        wp.categories().get()
        .then((response) => {
            this.setState({ categories: [...this.state.categories, ...response]});
        })
        .catch((error) => {
            console.error(error);
        });

        wp.tags().get()
        .then((response) => {
            this.setState({ tags: [...this.state.tags, ...response]});
        })
        .catch((error) => {
            console.error(error);
        });
    }

    handleSavePost() {
        let post = {
            title: this.state.title,
            content: this.state.content,
            status: this.state.status,
            categories: [this.state.category],
            tags: [this.state.tag],
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

    handleChangeCategories(e) {
        this.setState({category: e.target.value})
    }

    handleChangeTags(e) {
        this.setState({tag: e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-md">
                    <h2>Add new post</h2>
                    <div className="form-group">
                        <input placeholder="Post title" onChange={ e => this.handleTitleChange(e)} className="form-control"/>
                    </div>
                    <div onChange={this.handleStatusChange} className="form-group">
                        <input type="radio" value="publish" name="status" /> Publish
                        <input type="radio" value="draft" name="status" /> Draft
                    </div>
                    <div className="row">
                        <div className="form-group col-2">
                            <select size="5" value={this.state.category} onChange={ e => this.handleChangeCategories(e)}>
                                {this.state.categories.map(category => (
                                    <option value={category.id} key={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col">
                            <select size="5" value={this.state.tag} onChange={e => this.handleChangeTags(e)}>
                                {this.state.tags.map(tag => (
                                    <option value={tag.id} key={tag.id}>{tag.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Post content" onChange={ e => this.handleContentChange(e) } className="form-control"/>
                    </div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                        <Link to="/posts" className="btn btn-secondary">Cancelar</Link>
                        <button onClick={ () => this.handleSavePost() } className="btn btn-primary">Save</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PostForm;