import React from "react";
import { Helmet } from "react-helmet";
import "./Error.css";
import error from "./warning.png";

const Error = () => {
  return (
    <div className="err-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error 404</title>
        <link rel="canonical" />
      </Helmet>
      <img alt="error" src={error} className="err-icone" />
      <h1 className="err1">Error 404 :( </h1>
      <h4 className="err2">
        La page que vous avez demandée n'a pas été trouvée
      </h4>
      <h4 className="err2">Si vous avez saisi l'URL directement, </h4>
      <h4 className="err2"> assurez-vous que l'orthographe est correcte.</h4>
      <a href="/">
        <button className="back-home">Back to Home Page</button>
      </a>
    </div>
  );
};

export default Error;
