import React from 'react';
import "./ThingsForm.scss";

import HomeNav from '../Home/HomeNav/HomeNav';
import formHero from "../../Assets/Form-Hero-Image.jpg";
import Decoration from "../../Assets/Decoration.svg";

const ThingsForm = () => {
    return(
        <sectioon className="thing-form-container">
            <div className="left-side-form">
                <img src={formHero} alt="" className="form-baner-img"/>
            </div>
            <div className="right-side-form">
                <div className="nav">
                    <HomeNav/>
                </div>
                <div className="form-baner-content">
                    <h2 className="form-baner-content-title">Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h2>
                    <img src={Decoration} alt="decoration"/>
                    <span className="forom-baner-text">Wystarczą 4 proste kroki</span>
                </div>
            </div>
        </sectioon>
    )
};

export default ThingsForm;