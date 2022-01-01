import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useDimensions from 'src/hooks/useDimensions';

const ListItem = ({ text, path, className, onClick }) => {
  const browserWidth = useDimensions();

  return (
    <li className={className}>
      <NavLink to={path} className="nav__link" {...(browserWidth < 768 && {onClick: onClick})} exact> 
        {text}
      </NavLink>
    </li>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  // path: PropTypes.string.isRequired,
  toggleModal: PropTypes.func,
  onClick: PropTypes.func,
};

export default ListItem;