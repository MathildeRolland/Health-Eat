import { STORE_LOW_CAL_MEALS } from 'src/actions/meals';

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
        default:
            return state;
    }
}

export default reducer;