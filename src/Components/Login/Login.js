import React, { Component } from "react";
import fire from "../Fire/Fire";

import "./Login.scss";
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";
import {Link} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            switch(error){
                case "auth/invalid-email":
                case "auth/user-disable":
                case "autch/user-not-found":
                    this.state.emailError(error)
                    break;
                case "auth/wrong-password":
                    this.state.passwordError(error)
                    break;
            }
          });
      }


    render() {
    return(
        <section className="login-container">
            <div className="main-nav">
                <HomeNav/>
            </div>
            <div className="login-content">
                <h2 className="login-title">Zaloguj się</h2>
                <img src={Decoration} alt="decoration" />
                <div className="login-panel">
                    <div className="login-input-div">
                        <label className="login-label">Email</label>
                        <input value={this.state.email} 
                            onChange={this.handleChange} 
                            type="email" 
                            name="email" 
                            className="login-input" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                        />
                        <p>{this.state.emailError}</p>
                    </div>
                    <div className="login-input-div">
                        <label className="login-label">Hasło</label>
                        <input value={this.state.password} 
                            onChange={this.handleChange} 
                            type="password" 
                            name="password" 
                            className="login-input" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                        />
                        <p>{this.state.passwordError}</p>
                    </div>
                    </div>
                    <div className="login-buttons">
                        <Link to="/register"><button className="login-btn">Załóż konto</button></Link> 
                        <button className="login-btn-bord" type="submit" onClick={this.login}>Zaloguj się</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;