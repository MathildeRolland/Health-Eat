import React from 'react';

import Tag from 'src/components/Tag';

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
        <form className="card__form">
          <input type="number" value="1" name="quantity" className="card__input--number"/>
          <input type="submit" value="+" className="card__input--submit"/>
        </form>
    </div>
  </div>
);

export default Card;
