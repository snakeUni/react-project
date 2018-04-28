import React, { Component } from 'react'
import {Route, Redirect, BrowserRouter, Router, Switch} from 'react-router-dom'
import TimoHeader from '../../layout/header/header'
import TimoNav from '../../layout/nav/nav'
import Rule from '../rules/rule'
import Record from '../record/index'
import AddRecord from '../addrecord/index'
import AllReward from '../allreward/allreward'
import RewardRecord from '../rewardrecord/index'
import './common.css'

class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const path = this.props.location.pathname.split('/')[2];
        return (
            <div className="main">
                <TimoHeader title="小薄荷奖惩"></TimoHeader>
                <TimoNav path={path}></TimoNav>
                <div className="content">
                    <Switch>
                        <Route path={`${this.props.match.path}/rule`} component={Rule} />
                        <Route path={`${this.props.match.path}/record`} component={Record} />
                        <Route path={`${this.props.match.path}/addrecord`} component={AddRecord} />
                        <Route path={`${this.props.match.path}/allreward`} component={AllReward} />
                        <Route path={`${this.props.match.path}/rewardrecord`} component={RewardRecord} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainContent