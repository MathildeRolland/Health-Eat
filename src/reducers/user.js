
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
    basket: [],
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
            const currentMeal = state.basket.find((meal) => meal.id === action.payload.mealId);

            return {
                ...state,
                basket:
                    !currentMeal ?
                        [ 
                            ...state.basket,
                            {
                                id: action.payload.mealId,
                                name: action.payload.mealTitle,
                                price: action.payload.mealPrice,
                                quantity: 1
                            }
                        ]
                    :
                        [
                            ...state.basket.filter((meal) => meal.id !== action.payload.mealId),
                            {
                                ...currentMeal,
                                quantity: currentMeal.quantity += 1
                            }
                        ]
                // basket: {
                //     ...state.basket,
                //     [action.payload.mealId]: {
                //         ...state.basket[action.payload.mealId],
                //         name: action.payload.mealTitle,
                //         price: action.payload.mealPrice,
                //         quantity: state.basket[action.payload.mealId] === undefined ? 1 : state.basket[action.payload.mealId].quantity + 1,
                //     }
                // }
            }
        }
        case RETRIEVE_TO_MEAL_QUANTITY: {
            const currentMeal = state.basket.find((meal) => meal.id === action.payload.mealId);

            return {
                ...state,
                basket:
                currentMeal !== undefined ?
                    [
                        ...state.basket.filter((meal) => meal.id !== action.payload.mealId),
                        {
                            ...currentMeal,
                            quantity: currentMeal.quantity > 0 ? currentMeal.quantity -= 1 : 0
                        }
                    ]
                    : [
                        ...state.basket
                    ]
                // basket: {
                //     ...state.basket,
                //     [action.payload.mealId]: {
                //         ...state.basket[action.payload.mealId],
                //         name: action.payload.mealTitle,
                //         price: action.payload.mealPrice,
                //         quantity: state.basket[action.payload.mealId] === undefined || state.basket[action.payload.mealId].quantity <= 0 ? 0 : state.basket[action.payload.mealId].quantity - 1,
                //     }
                // }
            }
        }
        default: 
            return state;
    }
};

export default reducer;