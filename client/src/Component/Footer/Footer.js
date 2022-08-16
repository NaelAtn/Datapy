import React from "react";
import "./Footer.css";
import datapy from "./Datapy.png";
import facebook from "./facebook.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <img alt="datapy" src={datapy} className="footer-logo" />
          <div className="infos-center">
            <div className="Infos">
              {/* Column1 */}
              <div>
                <p>Qui sommes-nous ?</p>
                <p>Nos services : </p>
                <p>Formation</p>
                <p>Ingénierie</p>
              </div>

              {/* Column1 */}
              <div>
                <p>Contactez-nous</p>
                <p>E-mail : </p>
                <p>Numero : </p>
                <p>Adresse : </p>
              </div>
            </div>
          </div>
          <div className="infos2">
            <p>Suivez-nous |</p>
            <img className="info-icons" src={facebook} alt="facebook" />{" "}
            <img alt="insta" className="info-icons" src={insta} />{" "}
            <img alt="linkedin" className="info-icons" src={linkedin} />
          </div>
          <hr className="hr1" />
          <p className="date">
            &copy;{new Date().getFullYear()} Datapy | All rights reserved |
            Terms Of Service | Privacy{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
