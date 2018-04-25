import React, { Component } from 'react'
import TimoList from './list'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({isShow: !this.state.isShow})
    }
    render() {
        let item = this.props.item;
        return (
            <div>
                <div className="main-menu" onClick={this.handleClick}>
                    <img src={item.imgPath} alt="blink" className="img"/>
                    <span>{item.name}</span>
                    <span className="icon-great">&gt;</span>
                </div>
                {this.state.isShow ? 
                <TimoList childLists = {item.children} path={this.props.path}/> : null}    
            </div>
        )
    }
}

export default DropDown