
// = = = = = = = = = = = Add 1 to quantity = = = = = = = = = = //
export const ADD_TO_MEAL_QUANTITY = "ADD_TO_MEAL_QUANTITY";
export const addToMealQuantity = (payload) => ({
    type: ADD_TO_MEAL_QUANTITY,
    payload
});

// = = = = = = = = = = = Retrieve 1 to quantity = = = = = = = = = = //
export const RETRIEVE_TO_MEAL_QUANTITY = "RETRIEVE_TO_MEAL_QUANTITY";
export const RetrieveToMealQuantity = (payload) => ({
    type: RETRIEVE_TO_MEAL_QUANTITY,
    payload
});
