import React, { Component } from 'react'
import './header.css'
import '../../../style/main.css'

class TimoHeader extends Component {
    render() {
        return (
            <div className="header">
                {this.props.title}
            </div>
        )
    }
}

export default TimoHeader