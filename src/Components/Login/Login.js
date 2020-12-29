import React from "react";

import "./Login.scss";
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = (props) => { 

    const {email, setEmail, password, setPassword, handleLogin, emailError,  passwordError } = props;

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
                        <input 
                            type="text" 
                            required value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            className="login-input" 
                            placeholder="Enter email" 
                        />
                        <p>{emailError}</p>
                    </div>
                    <div className="login-input-div">
                        <label className="login-label">Hasło</label>
                        <input 
                            type="password" 
                            required value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="login-input" 
                            placeholder="Password"
                        />
                        <p>{passwordError}</p>
                    </div>
                    </div>
                    <div className="login-buttons">
                        <Link to="/register"><button className="login-btn">Załóż konto</button></Link> 
                        <button className="login-btn-bord" type="submit" onClick={handleLogin}>Zaloguj się</button>
                    </div>
                </div>
            </section>
        )
}

export default Login;