import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/containers/Input';

import './inscription.scss';

const Inscription = () => {
  const storageObjectName = "newUser";
  return (
    <div className="inscription">
      <Title title="Inscription" />
      <form className="inscription__form">
          <Input
            type="text"
            name="name"
            label="Nom:"
            placeholder="Veuillez renseigner votre nom..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="text"
            name="firstname"
            label="Prénom:"
            placeholder="Veuillez renseigner votre prénom..."
            storageObjectName={storageObjectName}
          />
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
            placeholder="Veuillez renseigner un mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="password"
            name="password-verif"
            label="Mot de passe:"
            placeholder="Veuillez de nouveau renseigner votre mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input type="submit" value="M'INSCRIRE" />
      </form>
    </div>
  );
};

export default Inscription;