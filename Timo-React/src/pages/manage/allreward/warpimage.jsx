import  React, { Component } from 'react'

class WrapImage extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="reward-item text-center">
                <div className="reward-item-img">
                    <img src={item.imgPath} alt={item.title}/>
                </div>
                <div className="reward-item-title">
                    <span>{item.title}</span>
                </div>
                <div className="reward-item-remain">
                    剩余数量<span className="remain-number">{item.remainNumber}</span>
                </div>
            </div>
        )
    }
}

export default WrapImage