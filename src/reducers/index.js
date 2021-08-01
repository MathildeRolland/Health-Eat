import { TOGGLE_MOBILE_MENU, SAVE_INPUT } from "src/actions";

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