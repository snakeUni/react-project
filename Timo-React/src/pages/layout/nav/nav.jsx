import React, { Component } from 'react'
import DropDown from './dropdown'
import './nav.css'

class TimoNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [{
                name: '规则',
                imgPath: require('../../../assets/svg/blink.svg'),
                children: [{
                    name: '规则1',
                    to: '/mint/rule',
                    key: 'rule'
                }]
            },{
                name: '记录',
                imgPath: require('../../../assets/svg/record.svg'),
                children: [{
                    name: '所有记录',
                    to: '/mint/record',
                    key: 'record'
                },{
                    name: '添加记录',
                    to: '/mint/addrecord',
                    key: 'addrecord'
                }]
            },{
                name: '奖品',
                imgPath: require('../../../assets/svg/reward.svg'),
                children: [{
                    name: '所有奖品',
                    to: '/mint/allreward',
                    key: 'allreward'
                },{
                    name: '兑换记录',
                    to: '/mint/rewardrecord',
                    key: 'rewardrecord'
                }]
            }],
            temporary: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item) {
        this.setState({temporary: item});
    }
    render() {
        var menus = this.state.menus;
        return (
            <div className="navbar">
                <div className="nav-bar">
                    {menus.map((item, index) => {
                        return (
                           <DropDown item={item} key={index} path={this.props.path}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TimoNav