import React from "react";
import "./HomeNav.scss";
import fire from "../../Fire/Fire";

import {Link} from "react-scroll"
const HomeNav = ({user, email}) => {

    const handleLogout =() => {
        fire.auth().signOut();
        }

    return(
        <section className="home-nav-container">
            <div className="login-bar">
                {user ?(
                    <div className="logged-menu">
                        <p>Cześć {email} !</p> 
                        <a href="/oddaj-rzeczy"><button className="logged-home-nav-form-btn">Oddaj rzeczy</button></a>
                        <a href="/logout"><button className="logg-out-btn" onClick={handleLogout}>Wyloguj</button></a>
                    </div>
                ):(
                    <>
                        <a href="/login"><button className="log-in-btn">Zaloguj</button></a>
                        <a href="/register"><button className="register-on-btn">Załóż konto</button></a> 
                    </>
                )}
            </div>
            <nav className="nav-bar">
                <ul className="header-nav">
                    <a href="/"><li className="nav-element nav-start">Start</li></a>
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