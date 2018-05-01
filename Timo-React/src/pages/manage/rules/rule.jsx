import React, { Component } from 'react'
import TimoNotification from '../../../components/notification/index'
import TimoApi from '../../../api/api'
import './rule.css'

class Rule extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="rule">
                <h1 className="text-center">小薄荷奖惩规则</h1>
                <h2>规则如下:</h2>
                <div className="rule-content">
                    <p>奖励以星星的数目来表示，星星初始为 1 颗。</p>
                    <p>1. 小薄荷每天开开心心的，不生气 => 奖励 3 颗星星 否则扣除 2 颗星星</p>
                    <p>2. 小薄荷每天学习时间为 20-22 点。除特殊事情外，每天认真学习 奖励2颗星星
                        否则每次扣除 1 颗星星</p>
                    <p>3. 小薄荷生病按时吃药每次奖励 3 颗星星 否则扣除 2 颗星星</p>
                    <p>4. 小薄荷每天睡觉最晚 12 点，除非特殊情况。按时睡觉每次奖励 3 颗星星
                        否则每次扣除 2 颗星星</p>
                    <p>5. 小薄荷期末成绩优异，奖励 30 颗星星</p>
                </div>
                <h1>星星兑换奖励如下:</h1>
                <div className="rule-reward">
                    <p>
                        <span>10 颗星星 => 兑换一袋薯片</span>
                        <img src={require('../../../assets/svg/chips.svg')} alt="薯片"/>
                    </p>
                    <p>
                        <span>20 颗星星 => 兑换一袋薯片</span> 
                        <img src={require('../../../assets/svg/chips.svg')} alt="薯片"/>
                        <span>+ 一个梦⻰</span>
                        <img src={require('../../../assets/svg/iscream.svg')} alt="冰淇淋"/>
                    </p>
                    <p>
                        <span>50 颗星星 => 兑换脆香米1盒</span>
                        <img src={require('../../../assets/svg/chocolate.svg')} alt="脆香米"/>
                        <span>+ 1袋薯片</span>
                        <img src={require('../../../assets/svg/chips.svg')} alt="薯片"/>
                        <span>+ 1个梦⻰</span>
                        <img src={require('../../../assets/svg/iscream.svg')} alt="冰淇淋"/>
                    </p>
                    <p>
                        <span>80 颗星星 => mac 口红一只</span>
                        <img src={require('../../../assets/svg/mac.svg')} alt="mac口红"/>
                    </p>
                    <p>
                        <span>150 颗星星 => ysl/迪奥/香奈儿口红 1 只</span>
                        <img src={require('../../../assets/svg/mac.svg')} alt="香奈儿口红"/>
                    </p>
                    <p>
                        <span>220 颗星星 => mac口红</span>
                        <img src={require('../../../assets/svg/mac.svg')} alt="mac口红"/>
                        <span>+ ysl/迪奥/香奈儿一只</span>
                        <img src={require('../../../assets/svg/mac.svg')} alt="香奈儿口红"/>
                    </p>
                    <p>
                        <span>500 颗星星 => 3000以内包包一个</span>
                        <img src={require('../../../assets/svg/bag.svg')} alt="包"/>
                    </p>
                    <p>
                        <span>700 颗星星 => 最新美图手机1部</span>
                        <img src={require('../../../assets/svg/phone-andriod.svg')} alt="安卓"/>
                    </p>
                    <p>
                        <span>1000 颗星星 => 苹果X一部</span>
                        <img src={require('../../../assets/svg/phone-apple.svg')} alt="苹果"/>
                    </p>                    
                </div>
                <TimoNotification  title="这是标题" delay={5000} content="这是内容内容内容"/>
            </div>
        )
    }
    
}

export default Rule