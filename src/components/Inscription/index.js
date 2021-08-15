import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/containers/Input';

import './inscription.scss';

const Inscription = ({ name, firstname, email, password, passwordVerif }) => {
  const storageObjectName = "newUser";
  return (
    <div className="inscription">
      <Title title="Inscription" />
      <form className="inscription__form">
          <Input
            type="text"
            name="name"
            label="Nom:"
            value={name}
            placeholder="Veuillez renseigner votre nom..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="text"
            name="firstname"
            label="Prénom:"
            value={firstname}
            placeholder="Veuillez renseigner votre prénom..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="email"
            name="email"
            label="Email:"
            value={email}
            placeholder="Veuillez renseigner votre email..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="password"
            name="password"
            label="Mot de passe:"
            value={password}
            placeholder="Veuillez renseigner un mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="password"
            name="passwordVerif"
            label="Mot de passe:"
            value={passwordVerif}
            placeholder="Veuillez de nouveau renseigner votre mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input type="submit" value="M'INSCRIRE" />
      </form>
    </div>
  );
};

export default Inscription;