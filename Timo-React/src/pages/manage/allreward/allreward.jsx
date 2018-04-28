import React, { Component } from 'react'
import WrapImage from './warpimage'
import TimoAlert from '../../../components/Alert/Alert'
import './index.css'

class AllReward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rewards: this.rewards,
            isShow: false
        }
    }
    rewards = [{
        imgPath: require('../../../assets/images/rewards/chip.jpg'),
        title: '薯片',
        remainNumber: 1000
    }, {
        imgPath: require('../../../assets/images/rewards/iscream.jpg'),
        title: '冰淇淋',
        remainNumber: 1000
    }, {
        imgPath: require('../../../assets/images/rewards/chocolate.jpg'),
        title: '巧克力',
        remainNumber: 1000
    }, {
        imgPath: require('../../../assets/images/rewards/mac.jpg'),
        title: 'mac口红',
        remainNumber: 200
    }, {
        imgPath: require('../../../assets/images/rewards/ysl.jpg'),
        title: 'ysl口红',
        remainNumber: 100
    }, {
        imgPath: require('../../../assets/images/rewards/coach.jpg'),
        title: 'coach包',
        remainNumber: 10
    }, {
        imgPath: require('../../../assets/images/rewards/meitu.jpg'),
        title: '美图手机',
        remainNumber: 1
    }, {
        imgPath: require('../../../assets/images/rewards/iphonex.jpg'),
        title: '苹果X手机',
        remainNumber: 1
    }]
    render() {
        return (
            <div className="all-reward">
                <div className="reward-list clearFix">
                    {this.state.rewards.map((item, index) => {
                        return <WrapImage item={item} key={index}/>
                    })}
                </div>
                {this.state.isShow ? <TimoAlert content="111" close="取消" vertify="确定" /> : null}    
            </div>
        )
    }
}

export default AllReward