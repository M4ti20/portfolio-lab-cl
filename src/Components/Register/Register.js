import React, { Component } from "react";
import fire from "../Fire/Fire";

import "./Register.scss";
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";
import {Link} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }

    render(){
    return(
        <section className="register-container">
            <div className="main-nav">
                <HomeNav/>
            </div>
            <div className="register-content">
                <h2 className="register-title">Zarejestruj się</h2>
                <img src={Decoration} alt="decoration" />
                <div className="register-panel">
                    <div className="register-input-div">
                        <label className="register-label">Email</label>
                        <input value={this.state.email} 
                            onChange={this.handleChange} 
                            type="email" 
                            name="email" 
                            className="register-input" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                        />
                    </div>
                    <div className="register-input-div">
                        <label className="register-label">Hasło</label>
                        <input value={this.state.password} 
                            onChange={this.handleChange} 
                            type="password" 
                            name="password" 
                            className="register-input" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="register-buttons">
                    <Link to="/login"><button className="register-btn">Zaloguj się</button></Link>
                    <button onClick={this.signup} className="register-btn-bord">Załóż konto</button>
                </div>
            </div>
        </section>
    )
    }
};

export default Register;