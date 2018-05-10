import React, {Component} from 'react'
import './index.css'

class TimoPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            lists: []
        }
        // 保存初始化数组
        this.array = [];
        // 保存最后一个数组
        this.lastArray = [];
        // 中间值用于计算改变的多少
        this.middle = this.props.visibilityPages/2;
    }
    componentWillMount() {
        let total = this.props.total;
        let visibilityPages = this.props.visibilityPages;
        for(let i = 1; i <= visibilityPages; i++) {
            this.array.push(i);
        }
        for(let i = total-visibilityPages+1; i <= total; i++) {
            this.lastArray.push(i);
        }
        this.setState({lists: this.array});
    }
    handleClick(item) {
        // 计算点击距离中心的距离
        let distance = item - this.middle;
        // 最后距离
        let lastDistance = this.props.total - item;
        if(lastDistance >= this.middle) {
            if(distance >= 0) {
                let array = this.array.map(data => 
                    data + distance);
                this.setState({selected: item, lists: array});
            } else {
                this.setState({selected: item, lists: this.array})
            } 
        } else {
            this.setState({selected: item});
        } 
        if(this.props.onChange) {
            this.props.onChange(item);
        }
    }
    // handlePre() {
    //     let selected = this.state.selected - 1;
    //     this.setState({selected: selected});
    //     if(this.props.onChange) {
    //         this.props.onChange(selected);
    //     }
    // }
    // handleNext() {
    //     let selected = this.state.selected + 1;
    //     this.setState({selected: selected});
    //     if(this.props.onChange) {
    //         this.props.onChange(selected);
    //     }
    // }
    handleFirstPage(first) {
        let liststr = this.state.lists.toString();
        let arraystr = this.array.toString();
        if(liststr === arraystr) {
            this.setState({selected: first});
        } else {
            this.setState({selected: first, lists:this.array});
        }
        if(this.props.onChange) {
            this.props.onChange(first);
        }
    }
    handleLastPage(last) {
        let liststr = this.state.lists.toString();
        let arraystr = this.lastArray.toString();
        if(liststr === arraystr) {
            this.setState({selected: last});
        } else {
            this.setState({selected: last, lists:this.lastArray});
        }
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
                    {/* <li className="timo-pagination-item" id="pre" onClick={this.handlePre.bind(this)}><a>&lt;</a></li> */}
                    {this.state.lists.map((item, index) => {
                        return  <li className={`timo-pagination-item ${this.state.selected === item ? 'selected': ''}`} key={index} onClick={this.handleClick.bind(this, item)}>
                                    <a>{item}</a>
                                </li>
                    })}
                    {/* <li className="timo-pagination-item" id="next" onClick={this.handleNext.bind(this)}><a>&gt;</a></li> */}
                    <li className="timo-pagination-item" id="last" onClick={this.handleLastPage.bind(this, total)}><a>尾页</a></li>
                    共{total}页
                </ul>
            </div>
        )
    }
}

export default TimoPagination