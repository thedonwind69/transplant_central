import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class PostUpdateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.post.subject,
            content: this.props.post.content,
            rating: this.props.post.rating,
            user_id: this.props.currentUser ? this.props.currentUser.id : null,
            city_id: this.props.match.params.city_id,
            category_id: this.props.post.category_id,
        }
    }

    submitEditedPost (event) {
        event.preventDefault();
        const {post, currentUser} = this.props;
        const updatedPostObject = Object.assign({}, this.state);
        console.log(post);
        console.log(post.id);
        this.props.updatePost(updatedPostObject, currentUser.id, post.id);
        this.props.cancel;
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: event.currentTarget.value,
            })
        }
    }
     
    render () {
        console.log(this.props);
        return (
            <div class='post-index-item'>
                <form onSubmit={this.submitEditedPost.bind(this)}>
                    <label for='subject' >Subject</label>
                        <br />
                    <input class='post-subject' id='subject' type='text' value={this.state.subject} onChange={this.update('subject')}/>
                    <br />
                    <label for='content'>Content</label>
                        <br />
                    <textarea id='content' class='post-content' value={this.state.content} onChange={this.update('content')}></textarea>
                        <br />

                    <input type='submit' value='Edit Post' />

                    <button onClick={this.props.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default withRouter(PostUpdateForm);