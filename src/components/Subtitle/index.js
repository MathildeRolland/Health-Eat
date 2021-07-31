import React from 'react';
import PropTypes from 'prop-types';

import './subtitle.scss';

const Subtitle = ({ subtitle }) => (
  <h3 className="subtitle">{subtitle}</h3>
);

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
};

export default Subtitle;