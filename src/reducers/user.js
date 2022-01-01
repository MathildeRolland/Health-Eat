
import { SAVE_INPUT } from 'src/actions';
import {
    ADD_TO_MEAL_QUANTITY,
    RETRIEVE_TO_MEAL_QUANTITY
} from 'src/actions/user';

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
    },
    basket: {},
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
        case ADD_TO_MEAL_QUANTITY: {
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.payload.mealId]: {
                        ...state.basket[action.payload.mealId],
                        name: action.payload.mealTitle,
                        price: action.payload.mealPrice,
                        quantity: state.basket[action.payload.mealId] === undefined ? 1 : state.basket[action.payload.mealId].quantity + 1,
                    }
                }
            }
        }
        case RETRIEVE_TO_MEAL_QUANTITY: {
            return {
                ...state,
                basket: {
                    ...state.basket,
                    [action.payload.mealId]: {
                        ...state.basket[action.payload.mealId],
                        name: action.payload.mealTitle,
                        price: action.payload.mealPrice,
                        quantity: state.basket[action.payload.mealId] === undefined || state.basket[action.payload.mealId].quantity <= 0 ? 0 : state.basket[action.payload.mealId].quantity - 1,
                    }
                }
            }
        }
        default: 
            return state;
    }
};

export default reducer;