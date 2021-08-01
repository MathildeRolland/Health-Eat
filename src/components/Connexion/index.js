import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Title from 'src/components/Title';
import Input from 'src/containers/Input';

import './connexion.scss';

const Connexion = () => {
  const history = useHistory();
  const modal = useRef(null);
  const storageObjectName = "currentUser";

  // add an event listener to the entire window.
  // On click, if the tagret is not the modal, we can close it.
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

  return (
    <div className="connexion">
      <div className="connexion__modal" ref={modal}>
        <Title title="Se connecter" />
        <form className="connexion__form">
            <Input
              type="email"
              name="email"
              label="Email:"
              placeholder="Veuillez renseigner votre email..."
              storageObjectName={storageObjectName}
            />
            <Input
              type="password"
              name="password"
              label="Mot de passe:"
              placeholder="Veuillez renseigner votre mot de passe..."
              storageObjectName={storageObjectName}
            />
            <Input type="submit" value="Me connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connexion;