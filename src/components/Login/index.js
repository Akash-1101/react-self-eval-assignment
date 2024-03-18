import { Component } from "react";
import {Redirect} from "react-router-dom"
import "./index.css"

class Login extends Component{

    state={email:"",password:"",isLoggedIn: false}

    onChangeEmailInput=(event)=>{
        this.setState({email:event.target.value})
    }

    onChangepasswordInput=(event)=>{
        this.setState({password:event.target.value})
    }

    onclickSignIn=()=>{
        const {email,password}=this.state
        console.log(email,password)
        if(email==="rahul" && password==="rahul"){
            this.setState({ isLoggedIn: true });
        }else{
            this.setState({ isLoggedIn: true })
        }
        
    }
    render(){
        const { isLoggedIn } = this.state;

        // Redirect to dashboard if logged in
        if (isLoggedIn) {
            const{history}=this.props
            history.replace("/dashboard")
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className="main-bg-container">
                <div className="con1">
                    Board.
                </div>
                <div className="con3">
                    <div>
                    <h1 className="heading1">Sign in </h1>
                    <p className="para1">Sign in to your account</p>
                    <div className="con4">
                    <div className="con2">
                        <img className="google-img" src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300" alt="Google"/>
                        <p>Sign in with Google</p>
                    </div>
                    <div className="con2">
                        <img className="google-img" src="https://tse1.mm.bing.net/th?id=OIP.otTWbvlN2F1WoIKBazDz5gHaIl&pid=Api&rs=1&c=1&qlt=95&w=101&h=118" alt="Google"/>
                        <p>Sign in with Apple</p>
                    </div>
                    </div>
                    <div className="from-div-container">
                        <div className="form-container">
                            <label className="emailEl">Email address</label><br/>
                            <input onChange={this.onChangeEmailInput} className="inputEl" placeholder="rahul " type="text" /><br/>
                            <label className="emailEl">Password</label><br/>
                            <p>Password: rahul</p>
                            <input onChange={this.onChangepasswordInput} className="inputEl" placeholder="Enter the password" type="password"/><br/>
                            <p className="para2">Forgot Password ?</p><br/>
                            <button onClick={this.onclickSignIn} type="button" className="signinBtn">Sign In</button>
                        </div>
                        <p>Don’t have an account? <span className="spanEl">Register here</span></p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
