import React, {Component} from 'react'
import './alert.css'

class AlertBox extends Component {

    static defaultProps = {
        width: 520,
        cancle: '取消',
        ok: '确认'
    }

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOK = this.handleOK.bind(this);
    }

    handleCancel() {
        const onCancel = this.props.onCancel;
        if(onCancel){
            onCancel();
        }
    }
    handleOK() {
        const onOK = this.props.onOK;
        if(onOK) {
            onOK();
        }
    }
    render() {
        return (
            <div className="timo-modal">
                <div className="timo-alert alert-fade" style={{width:this.props.width}}>
                    <div className="alert-content">
                        {this.props.content}
                    </div>
                    <div className="timo-modal-content">
                        {this.props.children}
                    </div>
                    <div className="alert-foot">
                        <div>
                            <button className="cancel" onClick={this.handleCancel}>{this.props.cancle}</button>
                            <button className="ok" onClick={this.handleOK}>{this.props.ok}</button>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}

export default AlertBox