import React, { Component } from 'react'
import TimoTable from '../../../components/table/index'
import TimoPagination from '../../../components/pagination/index'

class RewardRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '日期',
                dataIndex: 'date',
                key: 'date'
            }, {
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
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }, {
                key: '3',
                age: 52,
                name: '胡彦祖',
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }, {
                key: '4',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }, {
                key: '5',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }, {
                key: '6',
                age: 52,
                name: '胡彦祖',
                address: '西湖区湖底公园1号',
                date: '2018-04-28'
              }]
        }
    }
    render() {
        return (
            <div className="reward-record" style={{padding:20}}>
                <div>
                    <TimoTable columns={this.state.columns} dataSource={this.state.dataSource} />
                </div>
                <div style={{marginTop:100}}>
                    <TimoPagination visibilityPages={10} total={50}/>
                </div>
            </div>
        )
    }
}

export default RewardRecord