import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/components/Input';

import './inscription.scss';

const Inscription = () => (
  <div className="inscription">
    <Title title="Inscription" />
    <form className="inscription__form">
        <Input type="text" name="name" label="Nom" />
    </form>
  </div>
);

export default Inscription;