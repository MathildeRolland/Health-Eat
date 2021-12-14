import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/containers/Input';

import './inscription.scss';

const Inscription = ({ name, firstname, email, password, passwordVerif }) => {
  const storageObjectName = "newUser";
  const onChange = () => {
    console.log("onchange")
  }

  return (
    <div className="inscription">
      <Title title="Inscription" />
      <form className="inscription__form">
          <Input
            type="text"
            name="name"
            label="Nom:"
            value={name}
            onChange={onChange}
            placeholder="Veuillez renseigner votre nom..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="text"
            name="firstname"
            label="Prénom:"
            value={firstname}
            onChange={onChange}
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
            onChange={onChange}
            placeholder="Veuillez renseigner un mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input
            type="password"
            name="passwordVerif"
            label="Mot de passe:"
            value={passwordVerif}
            onChange={onChange}
            placeholder="Veuillez de nouveau renseigner votre mot de passe..."
            storageObjectName={storageObjectName}
          />
          <Input type="submit" value="M'INSCRIRE" />
      </form>
    </div>
  );
};

export default Inscription;