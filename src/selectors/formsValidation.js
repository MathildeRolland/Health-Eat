export const formValidation = (formDatas) => {
    const errors = {};

    if(formDatas.name) {
        if(formDatas.name === "") {
            errors.name = "Vous n'avez pas renseigné votre nom";
        } else if(formDatas.name.length < 4 || formDatas.name.length > 25) {
            errors.name = "Votre nom doit faire entre 4 et 25 carractères de long";
        } else if(!/[a-zA-Z0-9]/.test(formDatas.name)) {
            errors.name = "Votre nom ne doit contenir que des caractères alpha-numériques";
        }
    }

    if(formDatas.firstname) {
        if(formDatas.firstname === "") {
            errors.firstname = "Vous n'avez pas renseigné votre prénom";
        } else if(formDatas.firstname.length < 4 || formDatas.firstname.length > 25) {
            errors.firstname = "Votre prénom doit faire entre 4 et 25 carractères de long";
        } else if(!/[a-zA-Z]/.test(formDatas.firstname)) {
            errors.firstname = "Votre prénom ne doit contenir que des caractères alphabétiques";
        }
    }

    if(formDatas.email === "") {
        errors.email = "Vous n'avez pas renseigné votre email";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formDatas.email)) {
        errors.email = "Veuillez renseigner une adresse email valide";
    }

    if(formDatas.password) {
        if(formDatas.password === "") {
            errors.password = "Vous n'avez pas renseigné votre mot de passe";
        } else if(formDatas.password.length < 8) {
            errors.password = "Votre mot de passe doit contenir au minimum 7 caractères";
        } else if(!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&.?-_ "]).*$/.test(formDatas.password)) {
            errors.password = "Veuillez renseigner un mot de passe valide (caractères alphanumériques et caractères spéciaux !, #, $, %, &, ., ?, -, _  seulement";
        }
    }

    if(formDatas.passwordVerif) {
        if(formDatas.passwordVerif === "") {
            errors.passwordVerif = "Vous n'avez pas validé votre mot de passe";
        } else if(formDatas.passwordVerif.length < 8) {
            errors.passwordVerif = "Votre mot de passe doit contenir au minimum 7 caractères";
        } else if(!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&.?-_ "]).*$/.test(formDatas.passwordVerif)) {
            errors.passwordVerif = "Veuillez renseigner un mot de passe valide (caractères alphanumériques et caractères spéciaux !, #, $, %, &, ., ?, -, _  seulement";
        }
    }

    if(formDatas.message === "") {
        errors.message = "Vous n'avez pas renseigné votre message";
    } else if(formDatas.message.length < 20) {
        errors.message = "Votre message doit contenir au minimum 20 caractères";
    } else if(!/[a-zA-Z0-9-_']/.test(formDatas.message)) {
        errors.message = "Veuillez renseigner un message valide (pas de caractères spéciaux";
    }

    return errors;
};
