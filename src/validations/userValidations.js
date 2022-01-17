import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string().min(4, "Veuillez saisir plus de 4 caractères").required("Veuillez saisir votre nom"),
    email: yup.string().email("Veuillez saisir une adresse email valide").required("Veuillez saisir une adresse email"),
    message: yup.string().min(25, "Veuillez saisir au moins 25 caractères").required("Veuillez saisir un message")
}).required("Veuillez saisir tous les champs");

export const subscribeSchema = yup.object().shape({
    name: yup.string().min(4, "Veuillez saisir plus de 4 caractères").required("Veuillez saisir votre nom"),
    firstname: yup.string(4, "Veuillez saisir plus de 4 caractères").required("Veuillez saisir votre prénom"),
    email: yup.string().email("Veuillez saisir une adresse email valide").required("Veuillez saisir une adresse email"),
    password: yup.string().min(6, "Veuillez saisir au moins 6 caractères").required("Veuillez saisir un mot de passe"),
    confirmPassword: yup.string().required("Veuillez confirmer votre mot de passe").oneOf([yup.ref("password")])
}).required("Veuillez renseigner tous les champs");