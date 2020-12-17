import React from "react";

import "./Register.scss";
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";
import {Link} from "react-router-dom";

const Register = () => {
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
                        <input type="email" className="register-input"/>
                    </div>
                    <div className="register-input-div">
                        <label className="register-label">Hasło</label>
                        <input type="password" className="register-input"/>
                    </div>
                    <div className="register-input-div">
                        <label className="register-label">Powtórz hasło</label>
                        <input type="password" className="register-input"/>
                    </div>
                </div>
                <div className="register-buttons">
                    <Link to="/register"><button className="register-btn">Załóż konto</button></Link> 
                    <Link to="/login"><button className="register-btn-bord">Zaloguj się</button></Link>
                </div>
            </div>
        </section>
    )
};

export default Register;