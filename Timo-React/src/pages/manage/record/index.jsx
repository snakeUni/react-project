import React, { Component } from 'react'
import TimoTable from '../../../components/table/index'
import './index.css'

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age'
            }, {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            }],
            dataSource: [{
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
              }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
              }, {
                key: '3',
                age: 52,
                name: '胡彦祖',
                address: '西湖区湖底公园1号'
              }]
        }
    }
    render() {
        return (
            <div className="record">
                <TimoTable columns={this.state.columns} dataSource={this.state.dataSource}/>
            </div>
        )
    }
}

export default Record