import React from "react";

import "./loader.scss";

const Loader = () => (
  <div className="container">
    <div className="loader">
      <div className="loader__square loader__square--left"></div>
      <div className="loader__square loader__square--right"></div>
      <div className="loader__square loader__square--center"></div>
    </div>
  </div>
);

export default Loader;
