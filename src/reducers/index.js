import { TOGGLE_MOBILE_MENU } from "src/actions";

const initialState = {
    burgerIsClicked: false,
    isConnexionOpen: false,
};

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state, 
                burgerIsClicked: !state.burgerIsClicked,
            };
        default: 
            return state;
    }
};

export default reducer;