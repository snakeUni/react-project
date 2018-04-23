import React, { Component } from 'react';
import {Route, Redirect, BrowserRouter, Router} from 'react-router-dom';
import Login from '../pages/login/login';

export default class RouteConfig extends Component {
    render() {
        return(
            <BrowserRouter>
                <Route path="/" component={Login}></Route>
            </BrowserRouter>
        )
    }
}