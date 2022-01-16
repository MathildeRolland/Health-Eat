// = = = = = = = = = = FETCH MEALS = = = = = = = = = = //
// Fetch low calories meals
export const FETCH_LOW_CAL_MEALS = "FETCH_LOW_CAL_MEALS";
export const fetchLowCalMeals = () => ({
    type: FETCH_LOW_CAL_MEALS
});

// Fetch medium calories meals
export const FETCH_MEDIUM_CAL_MEALS = "FETCH_MEDIUM_CAL_MEALS";
export const fetchMediumCalMeals = () => ({
    type: FETCH_MEDIUM_CAL_MEALS
});

// Fetch high calories meals
export const FETCH_HIGH_CALORIES_MEALS = "FETCH_HIGH_CALORIES_MEALS";
export const fetchHighCaloriesMeals = () => ({
    type: FETCH_HIGH_CALORIES_MEALS
});

// = = = = = = = = = = STORE MEALS = = = = = = = = = = //
// Store low calories meals
export const STORE_LOW_CAL_MEALS = "STORE_LOW_CAL_MEALS";
export const storeLowCalMeals = (payload) => ({
    type: STORE_LOW_CAL_MEALS,
    payload: payload
});

// Store medium calories meals
export const STORE_MEDIUM_CAL_MEALS = "STORE_MEDIUM_CAL_MEALS";
export const storeMediumCalMeals = (payload) => ({
    type: STORE_MEDIUM_CAL_MEALS,
    payload: payload
});

// Store high calories meals
export const STORE_HIGH_CAL_MEALS = "STORE_HIGH_CAL_MEALS";
export const storeHighCalMeals = (payload) => ({
    type: STORE_HIGH_CAL_MEALS,
    payload: payload
});