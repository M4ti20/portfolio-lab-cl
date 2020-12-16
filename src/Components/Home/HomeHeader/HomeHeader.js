import React from "react";
import "./HomeHeader.scss";
import homeJpg from "../../../Assets/Home-Hero-Image.jpg";
import decoration from "../../../Assets/Decoration.svg";

// import {BrowserRouter as Router, Link} from "react-router-dom";
import {Link} from "react-scroll"


const HomeHeader = () => {
    return(
        <section className="home-header-container">
            <div className="header-left-img">
                <img src={homeJpg} alt="" className="main-image"/>
            </div>
            <div className="header-right-content">
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
                <div className="header-main-content">
                    <div className="header-main-text">
                        <p className="header-main-text-p">Zacznij pomagać!</p>
                        <p className="header-main-text-p">Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={decoration} alt="" />
                    </div>
                    <div className="header-main-button">
                        <Link to="/login"><button className="first-main-btn">Oddaj <br/> rzeczy</button></Link>
                       <Link to="/login"><button className="second-main-btn">Zorganizuj <br/> zbiórkę</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;