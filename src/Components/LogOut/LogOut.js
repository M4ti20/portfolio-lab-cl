import React from "react";
import {Link} from "react-router-dom";

import "./LogOut.scss"
import HomeNav from "../Home/HomeNav/HomeNav";
import Decoration from "../../Assets/Decoration.svg";

const LogOut = () => {
    return(
        <section className="log-out-container">
            <div className="log-out-menu">
                <HomeNav/>
            </div>
            <div className="log-out-content">
                <h2 className="log-out-title">Wylogowanie nastąpiło poprawnie</h2>
                <img src={Decoration} alt="decoration"/>
                <Link to="/"><button className="to-main-page">Strona główna</button></Link>
            </div>
        </section>
    )
};

export default LogOut;