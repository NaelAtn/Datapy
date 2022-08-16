import React, { useState } from "react";
import "./ContactezNous.css";
import { FaPhoneAlt, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import { addMessages } from "../../JS/Actions/message";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import img from "./customer-service.png";


const ContactezNous = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleMessage = (e) => {
    e.preventDefault();
    dispatch(addMessages(message));
    navigate("/");
  };

  return (
    <div className="contact-us">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactez nous</title>
        <link rel="canonical" />
      </Helmet>

      <h2 className="about">CONTACTEZ-NOUS</h2>
      <h3 className="contact-text">
        Vous avez une question ? Notre équipe est là pour vous répondre du lundi
        au vendredi de 9h00 à 19h00.
      </h3>
      <div className="contact-container">
        <div>
          <div className="infos">
            <a href="tel:+33-xxxxxxx" className="v15">
              <h4>
                <FaPhoneAlt className="phone-ico" />
                &nbsp;&nbsp; +33 xxx xxx xxx
              </h4>
            </a>
          </div>
          <br />
          <div className="infos">
            <a
              target="_blank"
              href="mailto: contact@datapy.com"
              rel="noreferrer"
              className="v15"
            >
              <h4>
                <FaEnvelope className="mail-ico" />{" "}
                &nbsp;&nbsp;contact@datapy.com
              </h4>
            </a>
          </div>
        </div>
        <img src={img} alt="custom" className="custom-ico" />
      </div>
      <div onSubmit={handleMessage}>
        <h2 className="about" >
          ENVOYEZ-NOUS UN MESSAGE
        </h2>
        <br />
        <hr />
        <div className="message-container">
          <input
            className="message-input"
            placeholder="Nom et Prénom*"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <input
            className="message-input"
            placeholder="Adresse E-mail*"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="message-input"
            placeholder="Numéro de téléphone*"
            type="number"
            name="phone"
            onChange={handleChange}
          />
          <textarea
            className="message-area"
            placeholder="Votre Message*"
            type="text"
            rows="8"
            name="message"
            onChange={handleChange}
          />
          <button className="send" onClick={handleMessage} type="submit">
            Envoyer &nbsp;&nbsp;
            <FaRegPaperPlane />
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ContactezNous;
