import React from "react";
import "./WhoWeHelp.scss";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import decoration from "../../../Assets/Decoration.svg";
import Fundacion from "./Fundacion/Fundacion";
import Organization from "./Organization/Organization";

const WhoWeHelp = () => {
    return(
        <>
        <section className="wwh-container" id="wwh">
            <h2 className="wwh-main-title">Komu pomagamy?</h2>
            <img src={decoration} alt=""/>
            <div className="wwh-main-buttons">
                <button className="wwh-btn">Fundacjom</button>
                <button className="wwh-btn">Organizacjom <br/> pozarządowym</button>
                <button className="wwh-btn">Lokalnym <br/> zbiórkom</button>
            </div>
            <div className="change-wwh-content">
                <Router>
                    {/* <Fundacion/> */}
                    <Organization/>
                </Router>
            </div>
        </section>
        
        </>
    )
};

export default WhoWeHelp;