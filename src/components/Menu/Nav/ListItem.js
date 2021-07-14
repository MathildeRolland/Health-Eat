import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ text, path }) => (
  <li className="nav__list-item">
    <NavLink to={path} className="nav__link" exact>
      {text}
    </NavLink>
  </li>
);

ListItem.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ListItem;