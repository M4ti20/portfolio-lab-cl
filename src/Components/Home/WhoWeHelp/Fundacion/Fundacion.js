import React from "react";
import "./Fundacion.scss";
// import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const Fundacion = () => {
    return(
        
        <section className="fundacion-container">
            <p className="fundacion-text">
               Sinc the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            </p>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Fundacja "Dbam o Zdrowie"</h3>
                    <p className="purpose-and-mission">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
            </div>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Fundacja "Dla dzieci"</h3>
                    <p className="purpose-and-mission">Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">ubrania, meble, zabawki</p>
                </div>
            </div>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Fundacja "Bez domu"</h3>
                    <p className="purpose-and-mission">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">ubrania, jedzenie, ciepłe koce</p>
                </div>
            </div>
            <div className="page-buttons">
                <button className="next-page-wwh">1</button>
                <button className="next-page-wwh">2</button>
                <button className="next-page-wwh">3</button>
            </div>
        </section>
    )
};

export default Fundacion;