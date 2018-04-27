import React, { Component } from 'react'
import TimoTable from '../../../components/table/index'
import TimoPagination from '../../../components/pagination/index'
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
              }, {
                key: '4',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
              }, {
                key: '5',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
              }, {
                key: '6',
                age: 52,
                name: '胡彦祖',
                address: '西湖区湖底公园1号'
              }]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(currentpage) {
    }
    render() {
        return (
            <div className="record">
                <TimoTable columns={this.state.columns} dataSource={this.state.dataSource}/>
                <div className="record-pagination">
                    <TimoPagination total={50} visibilityPages={10} onChange={this.handleChange} />
                </div>    
            </div>
        )
    }
}

export default Record