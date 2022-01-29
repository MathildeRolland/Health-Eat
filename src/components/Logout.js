import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import Title from "src/components/Title";
import Button from "src/components/Button";

// Styles
import "./Connexion/connexion.scss";

const Logout = ({ handleLogout }) => {
  const history = useHistory();

  // Ref
  const modal = useRef(null);

  // handle close modal on click outside
  //   useEffect(() => {
  //     const handleClick = (evt) => {
  //       if (!modal.current.contains(evt.target)) {
  //         evt.stopPropagation();
  //         history.goBack();
  //       }
  //     };

  //     window.addEventListener("click", handleClick);
  //     return () => window.removeEventListener("click", handleClick);
  //   }, []);

  const onClick = (value) => {
    console.log(value);
    if (value === "Me déconnecter") {
      handleLogout();
    }
    history.goBack();
  };

  return (
    <div className="connexion">
      <div className="connexion__modal" ref={modal}>
        <Title title="Voulez-vous vraiment vous déconnecter?" />
        <div className="connexion__buttons">
          <Button
            text="Annuler"
            className="button button--danger"
            onClick={(e) => onClick(e.target.value)}
          />
          <Button
            text="Me déconnecter"
            className="button button--colored"
            onClick={(e) => onClick(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Logout;
