
import { SAVE_INPUT } from 'src/actions';
import {
    ADD_TO_MEAL_QUANTITY,
    RETRIEVE_TO_MEAL_QUANTITY
} from 'src/actions/user';

export const initialState = {
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

export const reducer = (state = initialState, action = {}) => {
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
                                quantity: 1,
                                totalPrice: 1 * action.payload.mealPrice
                            }
                        ]
                    :
                        [
                            ...state.basket.filter((meal) => meal.id !== action.payload.mealId),
                            {
                                ...currentMeal,
                                quantity: currentMeal.quantity += 1,
                                totalPrice: currentMeal.quantity * currentMeal.price,
                            }
                        ]
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
                            quantity: currentMeal.quantity > 0 ? currentMeal.quantity -= 1 : 0,
                            totalPrice: currentMeal.quantity * currentMeal.price
                        }
                    ]
                    : [
                        ...state.basket
                    ]
            }
        }
        default: 
            return state;
    }
};

export default reducer;