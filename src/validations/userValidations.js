import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string().min(4).required("Veuillez saisir votre nom"),
    email: yup.string().email("Veuillez saisir une adresse email valide").required("Veuillez saisir une adresse email"),
    message: yup.string().min(25, "Veuillez saisir au moins 25 caractères").required("Veuillez saisir un message")
}).required("Veuillez saisir tous les champs");