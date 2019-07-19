import React from 'react';
import {Link} from 'react-router-dom';
import Application from './Application';
import axios from 'axios';
class Login extends React.Component {

    constructor(props){
        super(props);
        // console.log("inside constructor");
        console.log(this.props);
        this.state = {email:'',password:'',error:''}
    }

    userEmail = (event) => {
        this.setState({email: event.target.value});
    }
    userPassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleClick = (event) => {
        console.log(this.state.password);
        console.log('email' + this.state.email);
        if(!this.state.email||!this.state.email.includes("@")){
            alert('invalid email');
            return false;
        }else if(!this.state.email || !this.state.password) {
            alert("email or password cant be empty"); 
            return false
        }else if(this.state.password.length<8){
            alert("password length should be atleast of 8 characters");
            return false;
        }
        else{
        var data = {
            "email":this.state.email,
            "password":this.state.password
        }
        axios.post(`https://localhost:8000/loginpostcall`, { data })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        console.log(this.state.email+":"+this.state.password);
     return true;
    }

    render(){
        return(
                <div>
                    {/* <Application /> */}
                    {/* {console.log("inside render")} */}
                    <meta charSet="utf-8" />
                    <title>Login Account</title>
                    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
                    <link
                        href="css/bootstrap-responsive.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <div className="navbar-inner">
                        <div className="container">
                            <button
                            type="button"
                            className="btn btn-navbar"
                            data-toggle="collapse"
                            data-target=".nav-collapse"
                            >
                            {" "}
                            <span className="icon-bar" /> <span className="icon-bar" />{" "}
                            <span className="icon-bar" />{" "}
                            </button>
                            <a className="brand" href>
                            PPL
                            </a>
                            <div className="pro_info pull-right">
                            <div className="pro_icn">
                                <img src="images/pic_small.png" />
                            </div>
                            <div className="pro_txt">
                                Me<b className="caret" />
                            </div>
                            <ul
                                className="dropdown-menu"
                                role="menu"
                                aria-labelledby="dLabel"
                            >
                                <li>
                                <a tabIndex={-1} href="/">
                                    My Profile
                                </a>
                                </li>
                                <li>
                                <a tabIndex={-1} href="/">
                                    Message Box
                                </a>
                                </li>
                                <li>
                                <a tabIndex={-1} href="/">
                                    Change Language
                                </a>
                                </li>
                                <li className="divider" />
                                <li>
                                <a tabIndex={-1} href="/">
                                    <input type="text" placeholder="search" />
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="nav-collapse collapse">
                            <ul className="nav">
                                <li className="active">
                                {" "}
                                <a href>Home</a>{" "}
                                </li>
                                <li className>
                                {" "}
                                <a href>E-Coupons</a>{" "}
                                </li>
                                <li className>
                                {" "}
                                <a href>E-Brands</a>{" "}
                                </li>
                                <li className>
                                {" "}
                                <a href>Resuse Market</a>{" "}
                                </li>
                                <li className>
                                {" "}
                                <a href>Lost and Found</a>{" "}
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="content">
                        <div className="content_rgt">
                            <div className="login_sec">
                            <h1>Log In</h1>
                            <ul>
                                <li>
                                <span>Email-ID</span>
                                <input type="text"
                                 placeholder="Enter your email"
                                 value={this.state.email} 
                                 onChange={this.userEmail}/>
                                </li>
                                <li>
                                <span>Password</span>
                                <input type="text"
                                 placeholder="Enter your password"
                                 value={this.state.password}
                                 onChange={this.userPassword} />
                                </li>
                                <li>
                                <input type="checkbox" />Remember Me
                                </li>
                                <li>
                                <input type="submit"
                                 defaultValue="Log In"
                                 onClick={this.handleClick}
                                  />
                                <a href>Forgot Password</a>
                                </li>
                            </ul>
                            <div className="addtnal_acnt">
                                I do not have any account yet.<Link to="/register">Create My Account Now !</Link>
                            </div>
                            </div>
                        </div>
                        <div className="content_lft">
                            <h1>Welcome from PPL!</h1>
                            <p className="discrptn">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which don't
                            look even slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there isn't
                            anything embarrassing hidden in the middle of text.{" "}
                            </p>
                            <img src="images/img_9.png" alt />{" "}
                        </div>
                        </div>
                    </div>
                    <div className="clear" />
                    </div>
        );
    }
}
export default Login;