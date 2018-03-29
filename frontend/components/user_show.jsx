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


    render () {
        return (
            <div>
                usershow here
            </div>
        )
    }

}

export default withRouter(UserShow);