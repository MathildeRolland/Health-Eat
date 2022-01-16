import axios from 'axios';

import {
    FETCH_LOW_CAL_MEALS,
    FETCH_MEDIUM_CAL_MEALS,
    FETCH_HIGH_CALORIES_MEALS,
    storeLowCalMeals,
    storeMediumCalMeals,
    storeHighCalMeals
} from 'src/actions/meals';
import { fetchMeals } from '../functions/api';


export const apiMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH_LOW_CAL_MEALS: {
            const config = {
                url: '/recipes/complexSearch',
                params: {
                    apiKey: process.env.REACT_APP_APP_KEY,
                    maxCalories: 500,
                    addRecipeInformation: true,
                    number: 9
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            fetchMeals(config, store, storeLowCalMeals);

            break;
        }
        case FETCH_MEDIUM_CAL_MEALS: {
            const config = {
                url: '/recipes/complexSearch',
                params: {
                    apiKey: process.env.REACT_APP_APP_KEY,
                    maxCalories: 1250,
                    addRecipeInformation: true,
                    number: 9
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            fetchMeals(config, store, storeMediumCalMeals);

            break;
        }
        case FETCH_HIGH_CALORIES_MEALS: {
            const config = {
                url: '/recipes/complexSearch',
                params: {
                    apiKey: process.env.REACT_APP_APP_KEY,
                    maxCalories: 1750,
                    addRecipeInformation: true,
                    number: 9
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            fetchMeals(config, store, storeHighCalMeals);

            break;
        }
        default:
            next(action);
    }
}

export default apiMiddleware;