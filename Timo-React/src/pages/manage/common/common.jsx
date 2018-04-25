import React, { Component } from 'react'
import {Route, Redirect, BrowserRouter, Router, Switch} from 'react-router-dom'
import TimoHeader from '../../layout/header/header'
import TimoNav from '../../layout/nav/nav'
import Rule from '../rules/rule'
import './common.css'

class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const path = this.props.location.pathname.split('/')[2];
        return (
            <div className="main">
                <TimoHeader></TimoHeader>
                <TimoNav path={path}></TimoNav>
                <div className="content">
                    <Switch>
                        <Route path={`${this.props.match.path}/rule`} component={Rule} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainContent