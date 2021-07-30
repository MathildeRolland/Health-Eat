import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/components/Input';
import Textarea from 'src/components/Textarea';

import './contact.scss';

const Contact = () => (
  <div className="contact">
    <Title title="Contactez-nous" />
    <form className="contact__form">
        <Input type="text" name="name" placeholder="Veuillez renseigner votre nom" label="Nom:" />
        <Input type="email" name="email" placeholder="Veuillez renseigner votre email" label="Email:" />
        <Textarea label="Message:" name="message" placeholder="Veuillez écrire votre message" />
        <Input type="submit" value="Envoyer" />
    </form>
  </div>
);

export default Contact;