import React, {Component} from 'react'
import './alert.css'

class AlertBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleVertify = this.handleVertify.bind(this);
    }
    handleClick() {
        if(this.props.cancel){
            this.props.cancel();
        }
    }
    handleVertify() {
        if(this.props.sure) {
            this.props.sure();
        }
    }
    render() {
        return (
            <div className="timo-modal">
                <div className="timo-alert alert-fade">
                    <div className="alert-content">
                        {this.props.content}
                    </div>
                    <div className="timo-modal-content">
                        {this.props.children}
                    </div>
                    <div className="alert-foot">
                        <div>
                            <button className="" onClick={this.handleClick}>{this.props.close}</button>
                            <button className="" onClick={this.handleVertify}>{this.props.vertify}</button>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default AlertBox