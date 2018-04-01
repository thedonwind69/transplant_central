import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const {fetchUser, fetchUserPosts} = this.props
        fetchUser(this.props.match.params.user_id);
        fetchUserPosts(this.props.match.params.user_id);
    }

    render () {
        const {users} = this.props;
        return (
            <div>
                
                <div>
                    <h1>Profile Page for : {users.username}</h1>
                </div>

                <div>
                    
                </div>
                
                
                
            </div>
        )
    }

}

UserShow.defaultProps = {
    users: {
        id: null,
        username: ''
    }
}

export default withRouter(UserShow);