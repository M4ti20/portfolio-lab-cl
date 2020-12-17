import React from "react";
import "./Organization.scss";

const Organization = () => {
    return(
        <section className="organization-container">
            <p className="organization-text">
               Sinc the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            </p>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Organizacja "Lorem Ipsum 1"</h3>
                    <p className="purpose-and-mission">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Organizacja "Lorem Ipsum 2"</h3>
                    <p className="purpose-and-mission">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">Contrary to popular belief</p>
                </div>
            </div>
            <div className="info-div">
                <div className="company-mission-div">
                    <h3 className="name-of-company">Organizacja "Lorem Ipsum 3"</h3>
                    <p className="purpose-and-mission">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="equipment-div">
                    <p className="equipment">Lorem Ipsum is not simply random text.</p>
                </div>
            </div>
            <div className="page-buttons">
                <button className="next-page-wwh">1</button>
                <button className="next-page-wwh">2</button>
            </div>
        </section>
    )
};

export default Organization;