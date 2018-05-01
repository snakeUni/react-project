import React, { Component } from 'react'
import TimoAlert from '../../components/Alert/Alert'
import './login.css'
import '../../style/main.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            vertifypassword: '',
            isLogin: true,
            hide: false
        };
        //用户自动获取焦点
        this.textInput = React.createRef();
        
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeVertifyPassword = this.handleChangeVertifyPassword.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    handleChangeVertifyPassword(event) {
        this.setState({vertifypassword: event.target.value});
    }
    changeLogin() {
        this.setState({isLogin: false});
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.isNotNull()) {

        } else {
            this.setState({hide: true})
        }    
    }
    isNotNull() {
        if(!!this.state.username && !!this.state.password) {
            return true;
        }
        return false;
    }
    handleCancel() {
        console.log("取消")
    }
    handleSure() {
        console.log("确定")
    }
    componentDidMount() {
        this.textInput.current.focus();
    }
    render() {
        const isLogin = this.state.isLogin;
        let formData = null;
        if(isLogin) {
            formData = <div className="form-form">
                            <div className="form-control">
                                <label htmlFor="username">用户名:</label>
                                <input type="text" id="username" value={this.state.username} onChange={this.handleChangeUsername}
                                ref={this.textInput}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">密码:</label>
                                <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
                            </div>
                        </div>;
        } else {
            formData = <div className="form-form">
                            <div className="form-control">
                                <label htmlFor="username">用户名:</label>
                                <input type="text" id="username" value={this.state.username} onChange={this.handleChangeUsername}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">密码:</label>
                                <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="vertifypassword">密码:</label>
                                <input type="password" id="vertifypassword" value={this.state.vertifypassword} onChange={this.handleChangeVertifyPassword} />
                            </div>
                        </div>;
        }
        return(
            <div className="container">
                <div className="form">
                    <h1 className="text-center">小薄荷奖惩</h1>
                    <form name="form" className="text-center">
                        {formData}
                        <button className="btn btn-success" onClick={this.handleSubmit}>{isLogin ? '登录' : '注册'}</button>
                        {isLogin ? 
                        <div onClick={this.changeLogin} className="register text-center">还没有注册吗？点击前往注册==></div> :
                        null
                        }
                    </form>
                </div>
                {this.state.hide ? <TimoAlert content="这是标题" close="取消" vertify="确定" 
                cancel={this.handleCancel} sure={this.handleSure}><p>这是内容</p></TimoAlert> : null}   
            </div>
        )
    }
    
}

export default Login;