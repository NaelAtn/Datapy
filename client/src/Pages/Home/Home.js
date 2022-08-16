import React, { useRef } from "react";
import Inscription from "../../Component/Inscription/Inscription";
import Apropos from "../Apropos/Apropos";
import "./Home.css";
import laptop from "./laptop.jpg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const myRef = useRef(null);
  const scroldown = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          DATAPY : Formez-vous en Data Science et Intelligence Artificielle
        </title>
        <link rel="canonical" />
      </Helmet>
      <div>
        <h1 className="home-text">
          <span className="txt1">
            <p className="txt2">Des programmes sur mesure</p>
            <p className="txt3">en Data Science et Intelligence Artificielle</p>
            <button className="inscri" onClick={scroldown}>
              S'inscrire➔
            </button>
          </span>
        </h1>
      </div>

      <div className="intro-container">
        <div className="mission">
          <h1 className="data-py">
            Data<span className="v1">py</span>
          </h1>
          <br />
          <h2 className="vision">-Notre vision et mission :</h2>
          <br />
          <div>
            <p className="intro">
              Les données et l’IA nous entourent déjà de partout sans que nous
              en soyons souvent conscients. C’est justement l’IA qui est
              derrière la grande ascension des sociétés comme Facebook, Amazon
              ou Google. C’est des algorithmes de l’IA qui rendent aussi
              pertinent les résultats de recherche sur Google, qui vous
              proposent le meilleur sur votre fil d’actualité sur Facebook et
              qui augmentent nettement les ventes sur Amazon. Grâce à notre
              formation vous allez pouvoir comprendre ce qui se cache derrière
              les algorithmes d’IA et notamment derrière le concept clé de
              Machine Learning. Cette formation sera dispensée par des
              professeurs et des experts, spécialistes de la data science et
              sera axée sur l’apprentissage par la pratique. Elle vous ouvrira
              les portes des métiers de l'IA et vous enseignera l'ensemble des
              techniques avancées de data science : programmation Python,
              collecte, traitement, gestion et visualisation de données, machine
              learning, NLP et chatBot, vision par ordinateur et deep learning.
            </p>
            <div className="center-btn">
                <button className="inscri" onClick={() => navigate("/nos-cours")} >Découvrir nos programmes➔</button>
            </div>
          </div>
        </div>
        <img src={laptop} alt="img" className="intro-img" />
      </div>
      <div>
        <Apropos />
      </div>

      <div ref={myRef}>
        <Inscription />
      </div>
    </div>
  );
};

export default Home;
