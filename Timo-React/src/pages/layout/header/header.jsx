import React, { Component } from 'react'
import './header.css'
import '../../../style/main.css'

class TimoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '小薄荷奖惩'
        }
    }
    render() {
        return (
            <div className="header">
                {this.state.title}
            </div>
        )
    }
}

export default TimoHeader