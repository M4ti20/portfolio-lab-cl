import React from "react";
import "./Contact.scss";
import { useForm } from "react-hook-form";


import Facebook from "../../../Assets/Facebook.svg"
import Instagram from "../../../Assets/Instagram.svg"
import decoration from "../../../Assets/Decoration.svg";

const Contact = () => {
    
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) =>{
        console.log(data)

        const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            });
    }


    return(
        <section className="contact-contaier" id="contact">
            <div className="right-contact-div">
                <h2 className="contact-title">Skontaktuj się z nami</h2>
                <img src={decoration} alt="decoration" className="contact-decoration"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="first-line-form">    
                        <div className="name-input-div">
                            <label className="contact-label">Wpisz swoje imię</label>
                            <input type="text" className="contact-form" placeholder="Name" name="name" ref={register({required: true, minLength: 4})}/>
                            {errors.name && <p className="error-message">Podane imię jest nieprawidłowe!</p>}
                        </div>
                        <div className="email-input-div">
                            <label className="contact-label">Wpisz swój email</label>
                            <input type="email" className="contact-form" placeholder="abc@xyz.pl" name="email" ref={register({ pattern: /\S+@\S+\.\S+/ })} />
                            {errors.email && <p className="error-message">Podany email jest nieprawidłowy!</p>}
                        </div>
                    </div>
                        <div className="textarea-input-div">
                            <label className="contact-label">Wpisz swoją wiadomość</label>
                            <textarea type="text" className="contact-form-text" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" name="message" ref={register({required: true, minLength: 120})}/>
                            {errors.textarea && <p className="error-message">wiadomość jest za krótka</p>}
                        </div>
                        <div className="submit-button">    
                            <button type="submit" className="submit-btn">Wyślij</button>
                    </div>
                </form>
            </div>
            <div className="footer">
                <p className="footer-p">Copyright by Coders Lab</p>
                <div className="footer-icon">
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Instagram} alt="instagram"/>
                </div>
            </div>
        </section>
    )
};

export default Contact;