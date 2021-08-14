

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';



import reducer from 'src/reducers/index.js';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware()),
);

export default store;