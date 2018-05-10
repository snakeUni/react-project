import React, {Component} from 'react'

/**
 * @param {WrappedComponent} 包裹组件
 * @param {data} 传递的数据
 * @returns {NewWrapComponent} 新的组件
 */
export default (WrappedComponent, data) => {
    class NewWrapComponent extends Component {
        constructor () {
            super()
            this.state = {
                dataSource: []
            }
        }
        componentWillMount () {
            // 做一些请求
        }
        render () {
            return <WrappedComponent dataSource={this.state.dataSource} {...this.props}/>
        }   
    }
    return NewWrapComponent
}