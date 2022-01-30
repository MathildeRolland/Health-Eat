import React, { useState } from "react";

// COMPONENTS
import Button from "src/components/Button";
import ModifInput from "src/components/ModifInput";

const InfoBox = ({ newUser, handleNewEmail, handleNewPassword }) => {
  const [isModifyEmailClicked, setIsModifyEmailClick] = useState(false);
  const [isModifyPasswordClicked, setIsModifyPasswordClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailValidation = () => {
    console.log("je passe par la fonction du container (email)");
    handleNewEmail(email);
    setEmail("");
  };

  const onPasswordValidation = () => {
    console.log("je passe par la fonction du container (password)");
    handleNewPassword(password);
    setPassword("");
  };

  const onEmailCancel = () => {
    setIsModifyEmailClick(false);
  };

  const onPasswordCancel = () => {
    setIsModifyPasswordClicked(false);
  };

  const onEmailChange = (value) => {
    console.log("email change");
    setEmail(value);
  };

  const onPasswordChange = (value) => {
    console.log("password change");
    setPassword(value);
  };

  return (
    <div className="user__infobox">
      <div className="user__content">
        <div className="user__properties">
          <p className="user__property">Nom:</p>
          <p className="user__property">Prénom:</p>
          <p className="user__property">Email:</p>
        </div>
        <div className="user__infos">
          <p className="user__info">{newUser.name}</p>
          <p className="user__info">{newUser.firstname}</p>
          <p className="user__info">{newUser.email}</p>
        </div>
      </div>
      <div className="user__buttons">
        <Button
          text="Modifier Email"
          className="button button--dark"
          onClick={() => setIsModifyEmailClick(!isModifyEmailClicked)}
        />
        {isModifyEmailClicked && (
          <ModifInput
            type="email"
            onValidation={onEmailValidation}
            onCancel={onEmailCancel}
            onChange={(e) => onEmailChange(e.target.value)}
            value={email}
          />
        )}
        <Button
          text="Modifier Mot de passe"
          className="button button--dark"
          onClick={() => setIsModifyPasswordClicked(!isModifyPasswordClicked)}
        />
        {isModifyPasswordClicked && (
          <ModifInput
            type="password"
            onValidation={onPasswordValidation}
            onCancel={onPasswordCancel}
            onChange={(e) => onPasswordChange(e.target.value)}
            value={password}
          />
        )}
      </div>
    </div>
  );
};

export default InfoBox;
