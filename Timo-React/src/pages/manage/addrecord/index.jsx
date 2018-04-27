import React, { Component } from 'react'

class AddRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            happy: '',
            sleep: '',
            study: '',
            primiary: '',
            moreward: ''
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
    render() {
        return (
            <div>
                <form action="" name="form">
                    <div className="form-control">
                        <label htmlFor="happy">不生气</label>
                        <input type="number" name="happy" id="happy" value={this.state.happy} onChange={this.handleHappyChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="sleep">准时睡觉</label>
                        <input type="number" name="sleep" id="sleep" value={this.state.sleep} onChange={this.handleSleepChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="study">准时学习</label>
                        <input type="number" name="study" id="study" value={this.state.study} onChange={this.handleStudyChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="primiary">初始星星</label>
                        <input type="number" name="primiary" id="primiary" value={this.state.primiary} onChange={this.handlePrimiaryChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="moreward">额外奖励</label>
                        <input type="text" name="moreward" id="moreward" value={this.state.moreward} onChange={this.handleMorewardChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddRecord