import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscribeSchema } from "../../validations/userValidations";

// == COMPONENTS
import Title from "src/components/Title";
import Input from "src/components/Input";
import InfoBox from "src/components/InfoBox/InfoBox";
import Loader from "src/components/Loader";

// == STYLES
import "./inscription.scss";

const Inscription = ({ submitNewUser, newUser }) => {
  const history = useHistory();

  // State
  const [infoboxParams, setInfoboxParams] = useState({});
  let [subscribeCounter, setSubscribeCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeSchema),
  });

  const onSubmit = (data) => {
    clearErrors();
    setIsLoading(true);
    submitNewUser(data);
    setSubscribeCounter((subscribeCounter += 1));
    reset({
      name: "",
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const displayMessage = (
    <InfoBox info={infoboxParams.message} className={infoboxParams.class} />
  );

  const checkSubscription = () => {
    if (newUser.email !== "") {
      setInfoboxParams({
        message: "Vous êtes désormais inscrit.",
        class: "infobox infobox--box-success",
      });
      setTimeout(() => {
        setIsLoading(false);
        history.push("/");
      }, 2500);
    } else {
      setInfoboxParams({
        message: "L'inscription a échoué, veuillez réessayer",
        class: "infobox infobox--box-error",
      });
    }
  };

  console.log("isLoading", isLoading);

  useEffect(() => {
    if (subscribeCounter !== 0) {
      checkSubscription();
    }
  }, [subscribeCounter]);

  return (
    <div className="inscription">
      {subscribeCounter !== 0 && displayMessage}
      <Title title="Inscription" />
      <form className="inscription__form" onSubmit={handleSubmit(onSubmit)}>
        {errors && Object.keys(errors).length !== 0 && (
          <InfoBox
            className="infobox infobox--global-error"
            info="Veuillez remplir tous les champs"
          />
        )}
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              type="text"
              label="Nom:"
              value={value}
              onChange={onChange}
              placeholder="Veuillez renseigner votre nom..."
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="firstname"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              type="text"
              label="Prénom:"
              value={value}
              onChange={onChange}
              placeholder="Veuillez renseigner votre prénom..."
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              type="email"
              label="Email:"
              value={value}
              onChange={onChange}
              placeholder="Veuillez renseigner votre email..."
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
              name="password"
              label="Mot de passe:"
              value={value}
              onChange={onChange}
              placeholder="Veuillez renseigner un mot de passe..."
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              type="password"
              name="passwordVerif"
              label="Mot de passe:"
              value={value}
              onChange={onChange}
              placeholder="Veuillez de nouveau renseigner votre mot de passe..."
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <div className="input" style={{ marginTop: "2rem" }}>
          <input
            className="input__input input__input--submit"
            type="submit"
            value="M'INSCRIRE"
          />
        </div>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Inscription;
