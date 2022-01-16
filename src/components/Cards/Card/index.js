import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// == COMPONENTS
import Tag from 'src/components/Tag';

// == STYLES
import './card.scss';

// == Functions
import { retrieveFirstSentence, getRandomPrice } from 'src/functions';

const Card = ({ meal, addOneToQuantity, retrieveOneFromQuantity, quantity }) => {
  // state
  const [ price, setPrice ] = useState(getRandomPrice(8.50, 26));

  const handleClick = (e) => {
    e.preventDefault();
    console.log("triggered")
    
    if(e.currentTarget.value === '+') {
      addOneToQuantity({mealId: meal.id, mealTitle: meal.title, mealPrice: price});
    } else if(e.currentTarget.value === '-') {
      retrieveOneFromQuantity({mealId: meal.id, mealTitle: meal.title, mealPrice: price});
    } 
  }

  return (
    <div className="card">
      <div
        className="card__image"
        style={{backgroundImage: `url('${meal.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
      >
      </div>
      <div className="card__content">
          <p className="card__price">{price}€</p>
          <h3 className="card__title">{meal.title}</h3>
          <p className="card__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(retrieveFirstSentence(meal.summary))}}/>
          <div className="card__footer">
            <div className="card__tags">
              {
                meal.diets.filter((diet) => diet === "gluten free" || diet === "dairy free" || diet === "vegan").map((diet) => <Tag diet={diet} key={diet} />)
              }
            </div>
            <form className="card__form">
              <button
                name="minus"
                value="-"
                onClick={handleClick}
                className={quantity > 0 ? "card__input--submit" : "card__input--submit card__input--submit-disabled"}
                disabled={quantity <= 0}
              >
                -
              </button>
              <input type="number" value={quantity} onChange={() => console.log("on change")} name="quantity" className="card__input--number"/>
              <button
                name="plus"
                value="+"
                onClick={handleClick}
                className="card__input--submit"
              >
                +
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  quantity: 0,
}

Card.propTypes = {
  meal: PropTypes.object.isRequired,
  addOneToQuantity: PropTypes.func,
  retrieveOneFromQuantity: PropTypes.func,
  quantity: PropTypes.number,
}

export default Card;
