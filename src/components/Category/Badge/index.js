import React from 'react';

import './badge.scss';

const Badge = ({ categoryTitle }) => (
  <div className="badge">
    <p className="badge__paragraph">{categoryTitle}</p>
  </div>
);

export default Badge;