import React from 'react';

import Input from 'src/components/Input';

import './inscription.scss';

const Inscription = () => (
  <form className="inscription">
    <div className="inscription__field">
      <label htmlFor="lastname" className="inscription__label">Nom</label>
      <Input type="text" name="lastname" className="inscription__input"/>
    </div>
    <div className="inscription__field">
      <label htmlFor="firstname" className="inscription__label">Prénom</label>
      <Input type="text" name="firstname" className="inscription__input"/>
    </div>
    <div className="inscription__field">
      <label htmlFor="email" className="inscription__label">Email</label>
      <Input type="email" name="email" className="inscription__input"/>
    </div>
    <div className="inscription__field">
      <label htmlFor="password" className="inscription__label">Mot de passe</label>
      <Input type="password" name="password" className="inscription__input"/>
    </div>
  </form>
);

export default Inscription;