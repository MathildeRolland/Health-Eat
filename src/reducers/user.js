
import { SAVE_INPUT } from 'src/actions';

const initialState = {
    currentUser: {
        email: "",
        password: "",
    },
    contact: {
        name: "",
        email: "",
        message: "",
    },
    newUser: {
        name: "",
        firstname: "",
        email: "",
        password: "",
        passwordVerif: "",
    }
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SAVE_INPUT:
            return {
                ...state,
                [action.storageObjectName]: {
                    ...state[action.storageObjectName],
                    [action.name]: action.value,
                },
            };
        default: 
            return state;
    }
};

export default reducer;