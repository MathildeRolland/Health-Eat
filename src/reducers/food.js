import {
    STORE_LOW_CAL_MEALS,
    STORE_MEDIUM_CAL_MEALS,
    STORE_HIGH_CAL_MEALS
} from 'src/actions/meals';

const initialState = {
    lowCaloriesMeals: [],
    mediumCaloriesMeals: [],
    highCaloriesMeals: []
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case STORE_LOW_CAL_MEALS: {
            return {
                ...state,
                lowCaloriesMeals: action.payload
            }
        }
        case STORE_MEDIUM_CAL_MEALS: {
            return {
                ...state,
                mediumCaloriesMeals: action.payload
            }
        }
        case STORE_HIGH_CAL_MEALS: {
            return {
                ...state,
                highCaloriesMeals: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;