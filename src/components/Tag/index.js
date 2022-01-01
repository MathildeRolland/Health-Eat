import React from 'react';
import PropTypes from 'prop-types';

// == ICONS
import { GiWheat, GiCow } from "react-icons/gi";
import { RiPlantLine } from "react-icons/ri";

import './tag.scss';

const Tag = ({ diet }) => {

  const chooseIcon = (diet) => {
    switch(diet) {
      case "gluten free":
        return <GiWheat />;
      case "dairy free":
        return <GiCow />;
      case "vegan":
        return <RiPlantLine />;
      default:
        break;
    }
  }

  return (
    <div className="tag">
      <div className="tag__icon">
        {chooseIcon(diet)}
      </div>
    </div>
  );
}

Tag.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string)
};

export default Tag;