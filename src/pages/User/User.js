import React from "react";

import Title from "src/components/Title";
import InfosBox from "src/containers/InfosBox";
import Subtitle from "src/components/Subtitle";
import LastCommand from "src/components/User/LastCommand";

import "./user.scss";

const User = () => (
  <div className="user">
    <Title title="Mes Informations" />
    <InfosBox />
    <Subtitle subtitle="Mes 3 dernières commandes:" />
    <div className="user__lastcommands">
      <LastCommand />
      <LastCommand />
      <LastCommand />
    </div>
  </div>
);

export default User;
