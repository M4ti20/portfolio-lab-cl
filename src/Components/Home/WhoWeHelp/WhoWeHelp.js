import React from "react";
import "./WhoWeHelp.scss";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import decoration from "../../../Assets/Decoration.svg";
import Fundacion from "./Fundacion/Fundacion";
import Organization from "./Organization/Organization";
import Local from "./Local/Local";

const WhoWeHelp = () => {
    return(
        <Router>
        <section className="wwh-container" id="wwh">
            <h2 className="wwh-main-title">Komu pomagamy?</h2>
            <img src={decoration} alt=""/>
            <div className="wwh-main-buttons">
                <Link to="/"><button className="wwh-btn">Fundacjom</button></Link>
                <Link to="/organization"><button className="wwh-btn">Organizacjom <br/> pozarządowym</button></Link>
                <Link to="/local"><button className="wwh-btn">Lokalnym <br/> zbiórkom</button></Link>
            </div>
            <div className="change-wwh-content">
                    <>
                        <Switch>
                            <Route exact path="/" component={Fundacion} />
                            <Route path="/organization" component={Organization} />
                            <Route path="/local" component={Local} />
                        </Switch>
                    </>
            </div>
        </section>
        
        </Router>
    )
};

export default WhoWeHelp;