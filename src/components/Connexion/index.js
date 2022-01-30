import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connexionSchema } from "../../validations/userValidations";

// Components
import Title from "src/components/Title";
import Input from "src/components/Input";
import InfoBox from "src/components/InfoBox/InfoBox";
import Loader from "src/components/Loader";

// Styles
import "./connexion.scss";

// = = = = = = = = = = COMPONENT = = = = = = = = = = //
const Connexion = ({ handleConnexion, currentUser, isLogged }) => {
  const history = useHistory();

  // State
  const [infoboxParams, setInfoboxParams] = useState({});
  let [submitCounter, setSubmitCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Ref
  const modal = useRef(null);

  // react-hook-form
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(connexionSchema),
  });

  const displayMessage = (
    <InfoBox info={infoboxParams.message} className={infoboxParams.class} />
  );

  const checkUserConnected = () => {
    if (isLogged !== undefined) {
      if (isLogged === true) {
        setInfoboxParams({
          message: "Connexion réussie",
          class: "infobox infobox--box-success",
        });
        setTimeout(() => {
          setIsLoading(false);
          history.goBack();
        }, 2500);
      } else {
        setInfoboxParams({
          message: "La connexion a échouée, veuillez réessayer",
          class: "infobox infobox--box-error",
        });
      }
    }
  };

  const onSubmit = (data) => {
    clearErrors();
    setIsLoading(true);
    handleConnexion(data);
    setSubmitCounter((submitCounter += 1));
    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (submitCounter !== 0) {
      checkUserConnected();
    }
  }, [submitCounter]);

  // handle close modal on click outside
  useEffect(() => {
    const handleClick = (evt) => {
      if (!modal.current.contains(evt.target)) {
        evt.stopPropagation();
        history.goBack();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="connexion">
      <div className="connexion__modal" ref={modal}>
        {displayMessage}
        <Title title="Se connecter" />
        <form className="connexion__form" onSubmit={handleSubmit(onSubmit)}>
          {errors && Object.keys(errors).length !== 0 && (
            <InfoBox
              className="infobox infobox--global-error"
              info="Veuillez remplir tous les champs"
            />
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                type="email"
                label="Email:"
                value={value}
                placeholder="Veuillez renseigner votre email..."
                onChange={onChange}
                error={!!error}
                errorDetails={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                type="password"
                label="Mot de passe:"
                value={value}
                placeholder="Veuillez renseigner votre mot de passe..."
                onChange={onChange}
                error={!!error}
                errorDetails={error?.message}
              />
            )}
          />
          <div className="input">
            <input
              className="input__input input__input--submit"
              type="submit"
              value="Me connecter"
            />
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Connexion;
