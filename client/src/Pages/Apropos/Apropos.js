import React from "react";
import "./Apropos.css";
import task from "./task.png";
import objectif from "./objectif.png";
import debouche from './debouche.png'

const Apropos = () => {
  return (
    <div className="A-propos">
      <h2 className="about">À PROPOS DE NOUS</h2>
      <div className="container">
        <div>
          <img src={objectif} alt="objectif" className="ico" />
          <h3 className="title-a-propos">OBJECTIFS</h3>
          <p className="objectif-text">
            Acquérir des bases opérationnelles en data science. Programmer en
            Python, déployer des modèles de machine learning, utiliser des
            réseaux de neurones.
          </p>
        </div>

        <div>
          <img src={task} alt="PRE-REQUIS" className="ico2" />
          <h3 className="title-a-propos">PRE-REQUIS</h3>
          <p className="objectif-text">
          (Aucun pré-requis.)<br/>Les débutant(e)s sont acceptés et les bienvenu(es) ! Etre à l'aise
            en mathématiques ou en programmation est un plus, mais ce n'est pas
            indispensable. Afin de vérifier votre niveau, un entretien préalable
            à l'inscription est réalisé.
          </p>
        </div>

        <div>
          <img src={debouche} alt="debouche" className="ico2" />
          <h3 className="title-a-propos">DEBOUCHES</h3>
          <p className="objectif-text">
            Cette formation vous donne une compétence qui vous permet d'exercer
            en tant que Data scientist ou Data Analyst mais aussi de mettre en
            oeuvre les méthodes de la Data Science dans votre métier actuel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
