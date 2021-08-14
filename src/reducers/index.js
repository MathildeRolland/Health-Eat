import { combineReducers } from "redux";

import generalReducer from './general';
import userReducer from './user';
import foodReducer from './food';

const rootReducer = combineReducers({
    general: generalReducer,
    user: userReducer,
    food: foodReducer,
});

export default rootReducer;