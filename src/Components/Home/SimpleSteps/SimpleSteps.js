import React from "react";
import "./SimpleSteps.scss";
import {Link} from "react-router-dom";

import decoration from "../../../Assets/Decoration.svg";
import icon1 from "../../../Assets/Icon-1.svg";
import icon2 from "../../../Assets/Icon-2.svg";
import icon3 from "../../../Assets/Icon-3.svg";
import icon4 from "../../../Assets/Icon-4.svg";

const SimpleSteps = () => {
    return(
        <section className="simple-steps-container" id="simple-steps">
            <div className="simple-steps-title">
                <h2 className="simple-steps-main-text">Wystarczą 4 prost kroki</h2>
                <img src={decoration} alt="" />
            </div>
            <div className="steps-container">
                <div className="steps-column">
                    <img src={icon1} alt=""/>
                    <p className="steps-column-title">Wybierz rzeczy</p>
                        <div className="underline"></div>
                    <p className="column-text">ubrania, zabawki, sprzęty i inne</p>
                </div>

                <div className="steps-column">
                    <img src={icon2} alt=""/>
                    <p className="steps-column-title">Spakuj je</p>
                        <div className="underline"></div>
                    <p className="column-text">skorzystaj z worków na śmieci</p>
                </div>

                <div className="steps-column">
                    <img src={icon3} alt=""/>
                    <p className="steps-column-title">Zdecyduj komu chcesz pomóc</p>
                        <div className="underline"></div>
                    <p className="column-text">Wybierz zaufane miejsce</p>
                </div>

                <div className="steps-column">
                    <img src={icon4} alt=""/>
                    <p className="steps-column-title">Zamów kuriera</p>
                        <div className="underline"></div>
                    <p className="column-text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="simple-steps-button">
                <Link to="/login"><button className="simple-steps-main-btn">Oddaj <br/> rzeczy</button></Link>
            </div>
        </section>
    )
};

export default SimpleSteps;