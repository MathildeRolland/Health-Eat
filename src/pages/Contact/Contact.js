import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../validations/userValidations";

// == COMPONENTS
import Title from "src/components/Title";
import Input from "src/components/Input";
import Textarea from "src/components/Textarea";
import InfoBox from "src/components/InfoBox/InfoBox";

// == STYLE
import "./contact.scss";

const Contact = () => {
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = () => {
    clearErrors();
    console.log("Send new message!");
  };

  return (
    <div className="contact">
      <Title title="Contactez-nous" />
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
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
              value={value}
              placeholder="Veuillez renseigner votre nom"
              label="Nom:"
              onChange={onChange}
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
              value={value}
              placeholder="Veuillez renseigner votre email"
              label="Email:"
              onChange={onChange}
              error={!!error}
              errorDetails={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Textarea
              label="Message:"
              value={value}
              placeholder="Veuillez écrire votre message"
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
            value="Envoyer"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
