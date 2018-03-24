
import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

import PostIndexItem from './post_index_item';

import CategoryIndexItem from './category_index_item';

class PostsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null,
            currentCategoryId: null
        }
    }
    
    changeCategory (event) {
        event.preventDefault();
        this.setState({
            currentCategory: event.currentTarget.innerHTML,
            currentCategoryId: event.currentTarget.getAttribute('id')
        })
    }

    componentDidMount () {
        this.props.fetchCategories();
        this.props.fetchPosts(this.props.match.params.city_id);
    }

    render () {
       
        const {currentCity, categories, allPosts} = this.props;

        // const all_categories = categories.map((category) => {
        //     return <li 
        //         class='post-tab' 
        //         onClick={this.changeCategory.bind(this)}
        //         id={`${category.id}`}
        //         tabIndex={`${category.id}`}
        //         >
        //         {category.name}
        //     </li>
        // });

        const all_categories = categories.map((category) => {
            return <CategoryIndexItem  changeCategory={this.changeCategory.bind(this)} category={category}/>
        });

       
        const allThePosts = allPosts.map((post) => {
            let currentCategoryId = this.state.currentCategoryId;
            if (post.category_id === parseInt(currentCategoryId)) {
                
                return <PostIndexItem post={post} currentCategoryId={this.state.currentCategoryId}  />
            }
        });

        return (
            <div>
                <div class='post-tabs'>
                    <ul>
                        {all_categories}
                    </ul>    
                </div>

                <br/>


                <div>
                    {allThePosts.reverse()}
                </div>


            </div>
        )
    }


}


export default withRouter(PostsDisplay);