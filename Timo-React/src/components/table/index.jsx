import React, {Component} from 'react'
import './index.css'

class TimoTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const columns = this.props.columns;
        const dataSource = this.props.dataSource;
        return (
            <div className="timo-table">
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            {columns.map((item, index) => {
                                return <th key={item.key}>{item.dataIndex}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSource.map((item, index) => {
                            return <tr key={item.key}>
                                {columns.map((coloumItem) => {
                                    return <td key={coloumItem.key}>{item[coloumItem.key]}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>    
            </div>
        )
    }
}

export default TimoTable