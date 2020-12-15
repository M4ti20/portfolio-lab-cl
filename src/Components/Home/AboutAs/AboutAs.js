import React from "react";
import "./AboutAs.scss";

import decoration from "../../../Assets/Decoration.svg";
import signature from "../../../Assets/Signature.svg";
import people from "../../../Assets/People.jpg";

const AboutUs = () => {
    return(
        <section className="about-us-container">
            <div className="about-us-text">
                <h2 className="about-us-title">O nas</h2>
                <img src={decoration} alt=""/>
                <p className="about-us-main-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea praire turnip leek lentil turnip greens parsnip.</p>
                <div className="signature">
                    <img src={signature} alt="signature" />
                </div>
            </div>
            <div className="about-us-img">
                <img src={people} alt="people" className="people-img"/>
            </div>
        </section>
    )
}; export default AboutUs;