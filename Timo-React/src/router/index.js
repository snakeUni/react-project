import React, { Component } from 'react'
import {Route, Redirect, BrowserRouter, Switch} from 'react-router-dom'
import Login from '../pages/login/login'
import MainContent from '../pages/manage/common/common'

export default class RouteConfig extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/mint" component={MainContent} />
                    <Redirect from="/mint" to="/mint/rule" />
                </Switch>
            </BrowserRouter>
        )
    }
}