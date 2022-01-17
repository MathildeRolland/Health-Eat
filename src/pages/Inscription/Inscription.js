import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { subscribeSchema } from '../../validations/userValidations';

// == COMPONENTS
import Title from 'src/components/Title';
import Input from 'src/containers/Input';
import InfoBox from 'src/components/InfoBox/InfoBox';

// == STYLES
import './inscription.scss';


const Inscription = () => {
  const { control, handleSubmit, clearErrors, formState: { errors }} = useForm({
    resolver: yupResolver(subscribeSchema)
  });

  const onSubmit = () => {
    clearErrors();
    console.log("Send new message!");
  }

  console.log(`errors`, errors)

  return (
    <div className="inscription">
      <Title title="Inscription" />
      <form className="inscription__form" onSubmit={handleSubmit(onSubmit)}>
        {
          errors && Object.keys(errors).length !== 0 && <InfoBox className="infobox infobox--global-error" info="Veuillez remplir tous les champs" />
        }
        <Controller 
          control={control}
          name="name"
          render={({field: {onChange, value}, fieldState: {error}}) => (
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
          render={({field: {onChange, value}, fieldState: {error}}) => (
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
          render={({field: {onChange, value}, fieldState: {error}}) => (
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
          render={({field: {onChange, value}, fieldState: {error}}) => (
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
          render={({field: {onChange, value}, fieldState: {error}}) => (
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
        <div className="input" style={{marginTop: '2rem'}}>
          <input className="input__input input__input--submit" type="submit" value="M'INSCRIRE" />
        </div>
      </form>
    </div>
  );
};

export default Inscription;