import React from 'react';
import { useHistory } from 'react-router-dom';

import Title from 'src/components/Title';
import Input from 'src/components/Input';

import './connexion.scss';

const Connexion = () => {
  const history = useHistory();

  const closeModal = (evt) => {
    evt.stopPropagation();
    history.goBack();
  };

  return (
    <div className="connexion" onClick={closeModal}>
      <div className="connexion__modal">
        <Title title="Se connecter" />
        <form className="connexion__form">
            <Input type="email" name="email" label="Email:" placeholder="Veuillez renseigner votre email..." />
            <Input type="password" name="password" label="Mot de passe:" placeholder="Veuillez renseigner votre mot de passe..." />
            <Input type="submit" value="Me connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connexion;