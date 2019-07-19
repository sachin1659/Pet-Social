import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:'',password:'',email:'',fname:'',lname:''}
    }
    changeProps = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }
    handleClick = (event) => {
        console.log(this.state.password);
        console.log('email' + this.state.email);
        if(!this.state.email || !this.state.password||!this.state.username||!this.state.fname||!this.state.lname) {
            alert("any fields cant be empty"); 
            return false
        }else if(this.state.password.length<8){
            alert("password length should be atleast of 8 characters");
            return false;
        }
        else if(!this.state.email||!this.state.email.includes("@")){
            alert('invalid email');
            return false;
        }else{
        var data = {
            "email":this.state.email,
            "password":this.state.password
        }
        alert(this.state.email+":"+this.state.password);
        }
     return true;
    }
    render(){
        return(
            <div>
            <meta charSet="utf-8" />
            <title>Create An Account</title>
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
                    <div className="register_sec">
                    <h1>Create An Account</h1>
                    <ul>
                        <li>
                        <span>Username</span>
                        <input type="text"
                         placeholder="Enter your username"
                         value={this.state.username} 
                         name = "username"
                         onChange={this.changeProps} />
                        </li>
                        <li>
                        <span>Password</span>
                        <input type="text"
                         placeholder="Enter your password"
                         value={this.state.password}
                         name="password" 
                         onChange={this.changeProps} />
                        </li>
                        <li>
                        <span>Email</span>
                        <input type="text"
                         placeholder="Enter your email" 
                         value={this.state.email} 
                         name="email"
                         onChange={this.changeProps} />
                        </li>
                        <li>
                        <span>First Name</span>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={this.state.fname}
                            name="fname" 
                            onChange={this.changeProps}
                         />
                        </li>
                        <li>
                        <span>Last Name</span>
                        <input type="text" placeholder="Enter your last name" 
                        value={this.state.lname}
                        name="lname" 
                        onChange={this.changeProps} />
                        
                        </li>
                        <li>
                        <input type="checkbox" />I agree to Term &amp;
                        Conditions
                        </li>
                        <li>
                        <input type="submit" 
                        defaultValue="Register"
                        onClick={this.handleClick}
                        />
                        </li>
                    </ul>
                    <div className="addtnal_acnt">
                        I already have an account.<a href>Login My Account !</a>
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
export default Register;