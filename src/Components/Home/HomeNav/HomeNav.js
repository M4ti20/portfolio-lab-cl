import React from "react";
import "./HomeNav.scss";

// import {BrowserRouter as Router, Link} from "react-router-dom";
import {Link} from "react-scroll"

const HomeNav = () => {
    return(
        <section className="home-nav-container">
            <div className="login-bar">
                <Link to="/login"><button className="log-in-btn">Zaloguj</button></Link>
                <Link to="/register"><button className="register-on-btn">Załóż konto</button></Link> 
            </div>
            <nav className="nav-bar">
                <ul className="header-nav">
                    <li className="nav-element nav-start">Start</li>
                    <Link to="simple-steps" smooth={true} duration={1000}><li className="nav-element">O co chodzi?</li></Link>
                    <Link to="about-us" smooth={true} duration={1000}><li className="nav-element">O nas</li></Link>
                    <Link to="wwh" smooth={true} duration={1000}><li className="nav-element">Fundacja i organizacje</li></Link>
                    <Link to="contact" smooth={true} duration={1000}><li className="nav-element">Kontakt</li></Link>
                </ul>
            </nav>
        </section>
    )
};

export default HomeNav;