import React from 'react';

import Tag from 'src/components/Tag';
import Form from 'src/components/Form';

import './card.scss';

const Card = () => (
  <div className="card">
    <div className="card__image" />
    <div className="card__content">
        <h3 className="card__title">Nom du plat</h3>
        <p className="card__description">
            Description du plat, bllansdy zjhdfu zydkq ssyufudifj sdh ishuqsiq shfhsqofdbvjkdqh
        </p>
        <Tag />
        <Form />
    </div>
  </div>
);

export default Card;
