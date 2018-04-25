import React, { Component } from 'react'
import TimoList from './list'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

    }
    render() {
        let item = this.props.item;
        return (
            <div>
                <div className="main-menu">
                    <img src={item.imgPath} alt="blink" className="img"/>
                    <span>{item.name}</span>
                    <span className="icon-great">&gt;</span>
                </div>
                <TimoList childLists = {item.children} path={this.props.path}/>
            </div>
        )
    }
}

export default DropDown