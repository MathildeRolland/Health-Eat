import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// == COMPONENTS
import Tag from 'src/components/Tag';

// == STYLES
import './card.scss';

// == Functions
import { retrieveFirstSentence } from 'src/functions'

const Card = ({ meal, addOneToQuantity, retrieveOneFromQuantity, quantity }) => {

  const handleClick = (e) => {
    e.preventDefault();
    
    if(e.currentTarget.value === '+') {
      addOneToQuantity(meal.id);
    } else if(e.currentTarget.value === '-') {
      retrieveOneFromQuantity(meal.id);
    } 
  }

  console.log("quantity" , quantity)

  return (
    <div className="card">
      <div className="card__image" style={{backgroundImage: `url('${meal.image}')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
      </div>
      <div className="card__content">
          <h3 className="card__title">{meal.title}</h3>
          <p className="card__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(retrieveFirstSentence(meal.summary))}}/>
          <div className="card__footer">
            <div className="card__tags">
              {
                meal.diets.filter((diet) => diet === "gluten free" || diet === "dairy free" || diet === "vegan").map((diet) => <Tag diet={diet} />)
              }
            </div>
            <form className="card__form">
              <input type="submit" onClick={handleClick} value="-" className="card__input--submit"/>
              <input type="number" value={quantity} name="quantity" className="card__input--number"/>
              <input type="submit" onClick={handleClick} value="+" className="card__input--submit"/>
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
  addOneToQuantity: PropTypes.func.isRequired,
  retrieveOneFromQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number,
}

export default Card;
