import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Button from "src/components/Button";

import "./userbar.scss";

const UserBar = ({ isLogged }) => {
  const location = useLocation();

  return (
    <div className="userbar">
      {isLogged ? (
        <NavLink
          to={{
            pathname: "/logout",
            state: { background: location },
          }}
        >
          <Button
            text="Se Déconnecter"
            className="button button--colored button--hidden button--out"
          />
        </NavLink>
      ) : (
        <NavLink
          to={{
            pathname: "/login",
            state: { background: location },
          }}
        >
          <Button
            text="Se Connecter"
            className={"button button--colored button--hidden"}
          />
        </NavLink>
      )}
    </div>
  );
};

export default UserBar;
