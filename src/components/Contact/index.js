import React from 'react';

import Title from 'src/components/Title';
import Input from 'src/containers/Input';
import Textarea from 'src/containers/Textarea';

import './contact.scss';

const Contact = () => {
  const storageObjectName = "contact";

  return (
    <div className="contact">
      <Title title="Contactez-nous" />
      <form className="contact__form">
          <Input
            type="text"
            name="name"
            placeholder="Veuillez renseigner votre nom"
            label="Nom:"
            storageObjectName={storageObjectName}
          />
          <Input
            type="email"
            name="email"
            placeholder="Veuillez renseigner votre email"
            label="Email:"
            storageObjectName={storageObjectName}
          />
          <Textarea
            label="Message:"
            name="message"
            placeholder="Veuillez écrire votre message"
            storageObjectName={storageObjectName}
            />
          <Input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};


export default Contact;