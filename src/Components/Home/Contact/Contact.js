import React, {useState} from "react";
import "./Contact.scss";


import Facebook from "../../../Assets/Facebook.svg"
import Instagram from "../../../Assets/Instagram.svg"
import decoration from "../../../Assets/Decoration.svg";
import MessSent from "./MessageSent";

const Contact = () => {
    
    // const {register, handleSubmit, errors} = useForm();

    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [senderMessage, setSenderMessage] = useState("");
    const [formErrors, setFormErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const onSubmit = (event) =>{
        event.preventDefault();
       
        const data = {
            name: senderName,
            emaile: senderEmail,
            message: senderMessage
        };
      

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
                if(data.status === 'error'){
                    setFormErrors(data.errors)
                }else{
                    setSuccess(true);
                }
              console.log(data);

            })
            .catch(error => {
              console.log(error);
            });
    }

  
    // if(success) return <MessSent />;
  
    return(
        <section className="contact-contaier" id="contact">
            <div className="right-contact-div">
                <h2 className="contact-title">Skontaktuj się z nami</h2>
                <img src={decoration} alt="decoration" className="contact-decoration"/>
                { success && <MessSent />}
                <form onSubmit={onSubmit}>
                    <div className="first-line-form">    
                        <div className="name-input-div">
                            <label className="contact-label">Wpisz swoje imię</label>
                            <input type="text" 
                                className="contact-form" 
                                placeholder="Name" 
                                name="name" 
                                value={senderName}
                                onChange={ e=>setSenderName(e.target.value)}
                            />
                            { formErrors.length > 0 &&  formErrors.filter(el=>el.param==="name").map(el=><span className="error-msg">Podane imię jest nie prawidłowe</span>)}
                        </div>
                        <div className="email-input-div">
                            <label className="contact-label">Wpisz swój email</label>
                            <input type="email" 
                                className="contact-form" 
                                placeholder="abc@xyz.pl" 
                                name="email" 
                                value={senderEmail}
                                onChange={ e=>setSenderEmail(e.target.value)}
                            />
                            { formErrors.length > 0 &&  formErrors.filter(el=>el.param==="email").map(el=><span className="error-msg">Podany email jest nie prawidłowy</span>)}
                        </div>
                    </div>
                        <div className="textarea-input-div">
                            <label className="contact-label">Wpisz swoją wiadomość</label>
                            <textarea type="text" 
                            className="contact-form-text" 
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" 
                            name="message"
                            value={senderMessage}
                            onChange={ e=>setSenderMessage(e.target.value)}
                            />
                            { formErrors.length > 0 &&  formErrors.filter(el=>el.param==="message").map(el=><span className="error-msg">Wiadomość musi mieć conajmniej 120 znaków</span>)}
                        </div>
                        <div className="submit-button">    
                            <button type="submit" className="submit-btn" >Wyślij</button>
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