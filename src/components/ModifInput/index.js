import React from "react";

import "./modifinput.scss";

const ModifInput = ({ type, value, onChange, onValidation, onCancel }) => {
  return (
    <div className="modif">
      <input
        type={type}
        className="modif__input"
        value={value}
        onChange={onChange}
      ></input>
      <div className="modif__buttons">
        <button
          className="modif__button modif__button--valid"
          onClick={onValidation}
        >
          Valider
        </button>
        <button
          className="modif__button modif__button--cancel"
          onClick={onCancel}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default ModifInput;
