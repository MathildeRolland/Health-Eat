import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ title }) => (
  <h2 className="title">{title}</h2>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;