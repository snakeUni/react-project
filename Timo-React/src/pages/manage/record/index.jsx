import React, { Component } from 'react'
import TimoTable from '../../../components/table/index'
import TimoPagination from '../../../components/pagination/index'
import TimoApi from '../../../api/api'
import './index.css'

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '不生气',
                dataIndex: 'happy',
                key: 'happy'
            }, {
                title: '准时睡觉',
                dataIndex: 'sleep',
                key: 'sleep'
            }, {
                title: '准时学习',
                dataIndex: 'study',
                key: 'study'
            }, {
                title: '初始星星',
                dataIndex: 'primary',
                key: 'primary'
            }, {
                title: '额外奖励',
                dataIndex: 'extra',
                key: 'extra'
            }, {
                title: '其他奖励',
                dataIndex: 'other',
                key: 'other'
            }],
            dataSource: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this._mount = true;
        let result = TimoApi.getDayRecord({params: {userId: 1}});
        let dataSource = [];
        result.then((data) => {
            let response = data.get_response.result;
            dataSource = response.map((item) => {
                return { 
                    key: item.id,
                    happy: item.happy,
                    sleep: item.sleep,
                    study: item.study,
                    primary: item.primaryStar,
                    extra: item.rewardOther,
                    other: item.other
                }                
            })
            if(this._mount) {
                this.setState({dataSource: dataSource});
            }
        })  
    }
    componentWillUnmount() {
        this._mount = false;
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