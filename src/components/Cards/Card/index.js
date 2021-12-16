import React from 'react';
import DOMPurify from 'dompurify';

// == COMPONENTS
import Tag from 'src/components/Tag';

// == STYLES
import './card.scss';

// == Functions
import { retrieveFirstSentence } from 'src/functions'

const Card = ({ meal }) => (
  <div className="card">
    <div className="card__image" style={{backgroundImage: `url('${meal.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
      {/* <img className="card__image" src={meal.image} /> */}
    </div>
    <div className="card__content">
        <h3 className="card__title">{meal.title}</h3>
        <p className="card__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(retrieveFirstSentence(meal.summary))}}/>
        <Tag />
        <form className="card__form">
          <input type="number" value="1" name="quantity" className="card__input--number"/>
          <input type="submit" value="+" className="card__input--submit"/>
        </form>
    </div>
  </div>
);

export default Card;
