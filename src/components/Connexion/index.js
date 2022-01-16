import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// Components
import Title from 'src/components/Title';
import Input from 'src/containers/Input';

// Styles
import './connexion.scss';

// = = = = = = = = = = COMPONENT = = = = = = = = = = //
const Connexion = ({ currentUser }) => {
  const history = useHistory();
  const storageObjectName = "currentUser";

  // Ref
  const modal = useRef(null);

  useEffect(() => {    
    const handleClick = (evt) => {
      if(!modal.current.contains(evt.target)) {
        evt.stopPropagation();
        history.goBack();
      }
    };
    
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const onSubmit = () => {
    evt.preventDefault();
    console.log("Submitted!")
  }

  const onChange = (value) => {
    console.log("valeur :", value)
  }

  return (
    <div className="connexion">
      <div className="connexion__modal" ref={modal}>
        <Title title="Se connecter" />
        <form className="connexion__form" onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            label="Email:"
            value={currentUser.email}
            placeholder="Veuillez renseigner votre email..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="password"
            name="password"
            label="Mot de passe:"
            value={currentUser.password}
            placeholder="Veuillez renseigner votre mot de passe..."
            storageObjectName={storageObjectName}
          />
          <div className="input">
            <input className="input__input input__input--submit" type="submit" value="Me connecter" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;