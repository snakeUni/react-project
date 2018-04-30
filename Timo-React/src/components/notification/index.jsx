import React, {Component} from 'react'
import './index.css'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.fadeOut = this.fadeOut.bind(this);
    }
    componentDidMount() {
        let delay = this.props.delay;
        let timeout = setTimeout(this.fadeOut, delay);
    }
    fadeOut() {
        this.setState({isShow: false});
    }
    render() {
        return (
            <div>
                {this.state.isShow ? 
                <div className="timo-notification">                   
                    <div>
                        <img src={require(`../../assets/svg/notification/${this.props.type}.svg`)} alt={this.props.type} />
                        <span>{this.props.content}</span>
                    </div>     
                </div> : null}
            </div>
        )
    }
}

export default Notification