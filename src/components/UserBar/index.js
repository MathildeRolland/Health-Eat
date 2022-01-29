import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Button from "src/components/Button";

import "./userbar.scss";

const UserBar = ({ currentUser }) => {
  const location = useLocation();

  return (
    <div className="userbar">
      <NavLink
        to={{
          pathname: "/login",
          state: { background: location },
        }}
      >
        <Button
          text={currentUser.email !== "" ? "Se Déconnecter" : "Se Connecter"}
          className={
            currentUser.email !== ""
              ? "button button--colored button--hidden button--out"
              : "button button--colored button--hidden"
          }
        />
      </NavLink>
    </div>
  );
};

export default UserBar;
