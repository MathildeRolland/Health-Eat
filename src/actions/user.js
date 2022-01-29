// = = = = = = = = = = = Inscription = = = = = = = = = = //
export const HANDLE_SUBSCRIPTION = "HANDLE_SUBSCRIPTION";
export const handleSubscription = (payload) => ({
  type: HANDLE_SUBSCRIPTION,
  payload,
});

export const CONNECT_USER = "CONNECT_USER";
export const connectUser = (payload) => ({
  type: CONNECT_USER,
  payload,
});

// = = = = = = = = = = = Add 1 to quantity = = = = = = = = = = //
export const ADD_TO_MEAL_QUANTITY = "ADD_TO_MEAL_QUANTITY";
export const addToMealQuantity = (payload) => ({
  type: ADD_TO_MEAL_QUANTITY,
  payload,
});

// = = = = = = = = = = = Retrieve 1 to quantity = = = = = = = = = = //
export const RETRIEVE_TO_MEAL_QUANTITY = "RETRIEVE_TO_MEAL_QUANTITY";
export const RetrieveToMealQuantity = (payload) => ({
  type: RETRIEVE_TO_MEAL_QUANTITY,
  payload,
});
