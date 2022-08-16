import React, { useState } from 'react'
import './Inscription.css'
import { useDispatch } from "react-redux";
import { addInscri } from "../../JS/Actions/inscri";

const Inscription = () => {
  const dispatch = useDispatch();
  const [inscription, setInscription] = useState("");
  const handleChange = (e) => {
    setInscription({ ...inscription, [e.target.name]: e.target.value }); }

    const handleInscri = (e) => {
      e.preventDefault();
      dispatch(addInscri(inscription));     
      window.scrollTo({top : 0 }) 
    };
 
  return (
    <div className='Inscri-container'>
      <h1 className='inscri-title'>Inscrivez-vous dès maintenant !</h1>
      <div className='form-container'>
            <input className="inscri-input"placeholder="Nom*"type="text" name="name" onChange={handleChange} />
            <input className="inscri-input"placeholder="Prénom*"type="text" name="firstname" onChange={handleChange}/>
            <input className="inscri-input"placeholder="Adresse E-mail*"type="email" name="email" onChange={handleChange}/>
            <input className="inscri-input" placeholder="Numéro de téléphone*" type="number" name='phone' onChange={handleChange} />       
            <select className="inscri-input-dopdown" placeholder='product'  name ='course'onChange={handleChange}>
                <option disabled selected>- - Veuillez sélectionner votre cours*</option>
                <option>Data Science</option>
                <option>FullStack JS</option>
            </select>
            <select className="inscri-input-dopdown" placeholder='product' name='format' onChange={handleChange}  >
                <option disabled selected >- - Format de cours*</option>
                <option >Formule en Présentiel</option>
                <option>Formule à distance</option>
            </select>
          <br/>
          <br/>
          <button className="inscri-btn" onClick={handleInscri} >S'inscrire➔</button>
      </div>     
    </div>
  )
}

export default Inscription