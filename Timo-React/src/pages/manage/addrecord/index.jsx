import React, { Component } from 'react'
import './index.css'

class AddRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            happy: '',
            sleep: '',
            study: '',
            primiary: '',
            moreward: '',
            other: ''
        }
        this.handleHappyChange = this.handleHappyChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
        this.handlePrimiaryChange = this.handlePrimiaryChange.bind(this);
        this.handleMorewardChange = this.handleMorewardChange.bind(this);
    }
    handleHappyChange(event) {
        this.setState({happy: event.target.value});
    }
    handleSleepChange(event) {
        this.setState({sleep: event.target.value});
    }
    handleStudyChange(event) {
        this.setState({study: event.target.value})
    }
    handlePrimiaryChange(event) {
        this.setState({primiary: event.target.value});
    }
    handleMorewardChange(event) {
        this.setState({moreward: event.target.value});
    }
    handleOtherChange(event) {
        this.setState({other: event.target.value});
    }
    render() {
        return (
            <div className="add-record">
                <form action="" name="form" className="form">
                    <div className="form-control mr-xs">
                        <label htmlFor="happy">不生气</label>
                        <input type="number" name="happy" id="happy" value={this.state.happy} onChange={this.handleHappyChange}/>
                    </div>
                    <div className="form-control mr-xs">
                        <label htmlFor="sleep">准时睡觉</label>
                        <input type="number" name="sleep" id="sleep" value={this.state.sleep} onChange={this.handleSleepChange}/>
                    </div>
                    <div className="form-control mr-xs">
                        <label htmlFor="study">准时学习</label>
                        <input type="number" name="study" id="study" value={this.state.study} onChange={this.handleStudyChange}/>
                    </div>
                    <div className="form-control mr-xs">
                        <label htmlFor="primiary">初始星星</label>
                        <input type="number" name="primiary" id="primiary" value={this.state.primiary} onChange={this.handlePrimiaryChange}/>
                    </div>
                    <div className="form-control mr-xs">
                        <label htmlFor="moreward">额外奖励</label>
                        <input type="number" name="moreward" id="moreward" value={this.state.moreward} onChange={this.handleMorewardChange}/>
                    </div>
                    <div className="form-control mr-xs">
                        <label htmlFor="other">其他</label>
                        <input type="number" name="other" id="other" value={this.state.other} onChange={this.handleOtherChange}/>
                    </div>
                    <button className="btn btn-info">提交</button>
                </form>
            </div>
        )
    }
}

export default AddRecord