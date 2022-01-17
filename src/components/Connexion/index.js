import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { connexionSchema } from '../../validations/userValidations';

// Components
import Title from 'src/components/Title';
import Input from 'src/containers/Input';
import InfoBox from 'src/components/InfoBox/InfoBox';

// Styles
import './connexion.scss';

// = = = = = = = = = = COMPONENT = = = = = = = = = = //
const Connexion = ({ currentUser }) => {
  const history = useHistory();

  // Ref
  const modal = useRef(null);

  // react-hook-form
  const { control, handleSubmit, clearErrors, formState: { errors }} = useForm({
    resolver: yupResolver(connexionSchema)
  });

  const onSubmit = () => {
    clearErrors();
    console.log("Send new message!");
  }
  
  useEffect(() => {    
    const handleClick = (evt) => {
      if(!modal.current.contains(evt.target)) {
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
        <Title title="Se connecter" />
        <form className="connexion__form" onSubmit={handleSubmit(onSubmit)}>
          {
            errors && Object.keys(errors).length !== 0 && <InfoBox className="infobox infobox--global-error" info="Veuillez remplir tous les champs" />
          }
          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value}, fieldState: {error}}) => (
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
            render={({field: {onChange, value}, fieldState: {error}}) => (
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
            <input className="input__input input__input--submit" type="submit" value="Me connecter" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;