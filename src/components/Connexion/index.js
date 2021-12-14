import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// Components
import Title from 'src/components/Title';
import Input from 'src/containers/Input';

// Styles
import './connexion.scss';

// Form validation Schema
// const schema = yup.object({
//   email: yup.string().required(),
//   password: yup.string().min(6).required(),
// }).required();

// = = = = = = = = = = COMPONENT = = = = = = = = = = //
const Connexion = ({ currentUser }) => {
  // const { register, handleSubmit, formState: {errors} } = useForm();
  const history = useHistory();

  // Ref
  const modal = useRef(null);

  
  // const { register, handleSubmit, formState: { errors} } = useForm({
  //   resolver: yupResolver(schema)
  // });
  
  // add an event listener to the entire window.
  // On click, if the tagret is not the modal, we can close it.
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


  // const onSubmit = (data) => {
  //   console.log("Enter account here...", data);
  // }

  const onSubmit = () => {
    evt.preventDefault();
    console.log("Submitted!")
  }

  const onChange = (value) => {
    console.log("valeur :", value)
  }

  return (
    <div className="connexion">
      <div className="connexion__modal" ref={modal}>
        <Title title="Se connecter" />
        <form className="connexion__form" onSubmit={onSubmit}>
        {/* <form className="connexion__form" onSubmit={handleSubmit(onSubmit)}> */}
          <Input
            type="email"
            name="email"
            label="Email:"
            // register={register}
            // required
            value={currentUser.email}
            onChange={() => onChange()}
            placeholder="Veuillez renseigner votre email..."
          />
          <Input
            type="password"
            name="password"
            label="Mot de passe:"
            // register={register}
            // required
            value={currentUser.password}
            onChange={() => onChange()}
            placeholder="Veuillez renseigner votre mot de passe..."
          />
        <Input type="submit" value="Me connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connexion;