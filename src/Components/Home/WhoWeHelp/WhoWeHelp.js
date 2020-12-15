import React from "react";
import "./WhoWeHelp.scss";

import decoration from "../../../Assets/Decoration.svg";

const WhoWeHelp = () => {
    return(
        <section className="wwh-container">
            <h2 className="wwh-main-title">Komu pomagamy?</h2>
            <img src={decoration} alt=""/>
        </section>
    )
};

export default WhoWeHelp;