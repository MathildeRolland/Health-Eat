import React from 'react';

import Button from 'src/components/Button';

const InfoBox = () => (
  <div className="user__infobox">
        <div className="user__content">
            <div className="user__properties">
                <p className="user__property">Nom:</p>
                <p className="user__property">Prénom:</p>
                <p className="user__property">Email:</p>
            </div>
            <div className="user__infos">
                <p className="user__info">ROLLAND</p>
                <p className="user__info">Mathilde</p>
                <p className="user__info">rolland.mmathilde@gmail.com</p>
            </div>
        </div>  
        <div className="user__buttons">
            <Button text="Modifier Email" className="button button--dark" />
            <Button text="Modifier Mot de passe" className="button button--dark" />
        </div>
  </div>
);

export default InfoBox;