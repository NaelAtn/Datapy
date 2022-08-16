import React from "react";
import { Helmet } from "react-helmet";
import "./NosCours.css";
import present from "./present.jpg";
import distance from "./distance.jpg";
import Inscription from "../../Component/Inscription/Inscription";

const NosCours = () => {
  return (
    <div>
    <div className="container-course">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nos programmes</title>
        <link rel="canonical" />
      </Helmet>
      <h2 className="about">NOS PROGRAMMES</h2>
      <br />

      <p className="text-centre">
        Choisissez la formule qui vous convient et rejoignez-nous!
      </p>
      <br />
      <div className="container-format">
        <br />
        <div>
          <figure class="image-block">
            <img src={present} alt="img" />
            <figcaption>
              <h3>Formule en Présentiel :</h3>
              <br />
              <p>✓ Cours en journée.</p>
              <p>✓ Du lundi au vendredi de 9h à 12h puis de 14h à 17h.</p>
              <p>✓ Durée 12 semaines.</p>
            </figcaption>
          </figure>
        </div>
        <br />
        <br />
        <div>
          <figure class="image-block">
            <img src={distance} alt="img" />
            <figcaption>
              <h3>Formule à distance :</h3>
              <br />
              <p>✓ Cours en soirée et le samedi.</p>
              <p>✓ Du lundi au vendredi de 19h à 21h30 le samedi de 9h à 14h.</p>
              <p>✓ Durée 24 semaines.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <Inscription/>
    </div>
  );
};

export default NosCours;
