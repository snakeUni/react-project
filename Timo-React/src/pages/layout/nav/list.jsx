import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class List extends Component {
    static propTypes = {
        children: PropTypes.array
    }
    render() {
        let children = this.props.childLists;
        const path = this.props.path;
        return (
            <div>
                <ul className="navbar-child">
                    {children.map((item, index)=> {
                        return (
                            <li key={index} className={path === item.key? 'actived' : null}>
                                <Link to={item.to}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List