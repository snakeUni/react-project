import React, {Component} from 'react'
import './index.css'

class TimoPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
        this.array = [];
    }
    componentWillMount() {
        for(let i = 1; i <= this.props.visibilityPages; i++) {
            this.array.push(i);
        }
    }
    handleClick(item) {
        this.setState({selected: item});
        if(this.props.onChange) {
            this.props.onChange(item);
        }
    }
    handlePre() {
        let selected = this.state.selected - 1;
        this.setState({selected: selected});
        if(this.props.onChange) {
            this.props.onChange(selected);
        }
    }
    handleNext() {
        let selected = this.state.selected + 1;
        this.setState({selected: selected});
        if(this.props.onChange) {
            this.props.onChange(selected);
        }
    }
    handleFirstPage(first) {
        this.setState({selected: first})
        if(this.props.onChange) {
            this.props.onChange(first);
        }
    }
    handleLastPage(last) {
        this.setState({selected: last})
        if(this.props.onChange) {
            this.props.onChange(last);
        }
    }
    render() {
        const total = this.props.total;
        return (
            <div className="pagination">
                <ul className="timo-pagination text-center">
                    <li className="timo-pagination-item" id="first" onClick={this.handleFirstPage.bind(this, 1)}><a>首页</a></li>
                    <li className="timo-pagination-item" id="pre" onClick={this.handlePre.bind(this)}><a>&lt;</a></li>
                    {this.array.map((item, index) => {
                        return  <li className={`timo-pagination-item ${this.state.selected == item ? 'selected': ''}`} key={index} onClick={this.handleClick.bind(this, item)}>
                                    <a>{item}</a>
                                </li>
                    })}
                    <li className="timo-pagination-item" id="next" onClick={this.handleNext.bind(this)}><a>&gt;</a></li>
                    <li className="timo-pagination-item" id="last" onClick={this.handleLastPage.bind(this, total)}><a>尾页</a></li>
                    共{total}页
                </ul>
            </div>
        )
    }
}

export default TimoPagination