import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ text, path, className }) => (
  <li className={className}>
    <NavLink to={path} className="nav__link" exact>
      {text}
    </NavLink>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  // path: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
};

export default ListItem;