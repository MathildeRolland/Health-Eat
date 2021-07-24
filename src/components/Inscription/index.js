import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/components/Input';

import './inscription.scss';

const Inscription = () => (
  <div className="inscription">
    <Title title="Inscription" />
    <form className="inscription__form">
        <Input type="text" name="name" label="Nom:" placeholder="Veuillez renseigner votre nom..." />
        <Input type="text" name="firstname" label="Prénom:" placeholder="Veuillez renseigner votre prénom..." />
        <Input type="email" name="email" label="Email:" placeholder="Veuillez renseigner votre email..." />
        <Input type="password" name="password" label="Mot de passe:" placeholder="Veuillez renseigner un mot de passe..." />
        <Input type="password" name="password-verif" label="Mot de passe:" placeholder="Veuillez de nouveau renseigner votre mot de passe..." />
        <Input type="submit" value="M'INSCRIRE" />
    </form>
  </div>
);

export default Inscription;