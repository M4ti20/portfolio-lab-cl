import React, { useContext } from "react";
import "./HomeNav.scss";
import fire from "../../Fire/Fire";

import {Link as LinkRS} from "react-scroll";
import {Link} from "react-router-dom";
import { EmailContext } from "../../../App";

const HomeNav = ({user}) => {
    const email = useContext(EmailContext);
    
    const handleLogout =() => {
        fire.auth().signOut();
        }


    return(
        <section className="home-nav-container">
            <div className="login-bar">
                {user ?(
                    <div className="logged-menu">
                        <p>Cześć {email} !</p> 
                        <Link to="oddaj-rzeczy"><button className="logged-home-nav-form-btn">Oddaj rzeczy</button></Link>
                        <Link to="logout"><button className="logg-out-btn" onClick={handleLogout}>Wyloguj</button></Link>
                    </div>
                ):(
                    <>
                        <Link to="login"><button className="log-in-btn">Zaloguj</button></Link>
                        <Link to="register"><button className="register-on-btn">Załóż konto</button></Link> 
                    </>
                )}
            </div>
            <nav className="nav-bar">
                <ul className="header-nav">
                    <a href="/"><li className="nav-element nav-start">Start</li></a>
                    <LinkRS to="simple-steps" smooth={true} duration={1000}><li className="nav-element">O co chodzi?</li></LinkRS>
                    <LinkRS to="about-us" smooth={true} duration={1000}><li className="nav-element">O nas</li></LinkRS>
                    <LinkRS to="wwh" smooth={true} duration={1000}><li className="nav-element">Fundacja i organizacje</li></LinkRS>
                    <LinkRS to="contact" smooth={true} duration={1000}><li className="nav-element">Kontakt</li></LinkRS>
                </ul>
            </nav>
        </section>
    )
};

export default HomeNav;