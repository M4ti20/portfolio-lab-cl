import React from "react";

import "./Register.scss";
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";
import {Link} from "react-router-dom";

const Register = (props) => {

    const {email, setEmail, password, setPassword, handleSignUp, emailError,  passwordError} = props;

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
                        <input 
                            type="text" 
                            required value={email} 
                            onChange={e => setEmail(e.target.value)}                            
                            className="register-input" 
                            placeholder="Enter email" 
                        />
                        <p>{emailError}</p>
                    </div>
                    <div className="register-input-div">
                        <label className="register-label">Hasło</label>
                        <input 
                            type="password" 
                            required value={password} 
                            onChange={(e) => setPassword(e.target.value)}  
                            className="register-input" 
                            placeholder="Password"
                        />
                        <p>{passwordError}</p>
                    </div>
                </div>
                <div className="register-buttons">
                    <Link to="/login"><button className="register-btn">Zaloguj się</button></Link>
                    <button onClick={handleSignUp} className="register-btn-bord">Załóż konto</button>
                </div>
            </div>
        </section>
    )
};

export default Register;