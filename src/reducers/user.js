import {
  HANDLE_SUBSCRIPTION,
  ADD_TO_MEAL_QUANTITY,
  RETRIEVE_TO_MEAL_QUANTITY,
  CONNECT_USER,
  DECONNECT_USER,
  MODIFY_EMAIL,
  MODIFY_PASSWORD,
} from "src/actions/user";

export const initialState = {
  currentUser: {
    email: "",
    password: "",
  },
  contact: {
    name: "",
    email: "",
    message: "",
  },
  newUser: {
    name: "",
    firstname: "",
    email: "",
    password: "",
    passwordVerif: "",
  },
  basket: [],
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER: {
      return {
        ...state,
        isLogged:
          action.payload.email === state.newUser.email &&
          action.payload.password === state.newUser.password
            ? true
            : false,
        currentUser:
          action.payload.email === state.newUser.email &&
          action.payload.password === state.newUser.password
            ? {
                email: action.payload.email,
                password: action.payload.password,
              }
            : {
                email: "",
                password: "",
              },
      };
    }
    case HANDLE_SUBSCRIPTION: {
      return {
        ...state,
        newUser: {
          name: action.payload.name,
          firstname: action.payload.firstname,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    }
    case DECONNECT_USER:
      return {
        ...state,
        currentUser: {
          email: "",
          password: "",
        },
        isLogged: false,
      };
    case MODIFY_EMAIL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: action.payload,
        },
        newUser: {
          ...state.newUser,
          email: action.payload,
        },
      };
    case MODIFY_PASSWORD:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          password: action.payload,
        },
        newUser: {
          ...state.newUser,
          password: action.payload,
        },
      };
    case ADD_TO_MEAL_QUANTITY: {
      const currentMeal = state.basket.find(
        (meal) => meal.id === action.payload.mealId
      );

      return {
        ...state,
        basket: !currentMeal
          ? [
              ...state.basket,
              {
                id: action.payload.mealId,
                name: action.payload.mealTitle,
                price: action.payload.mealPrice,
                quantity: 1,
                totalPrice: 1 * action.payload.mealPrice,
              },
            ]
          : [
              ...state.basket.filter(
                (meal) => meal.id !== action.payload.mealId
              ),
              {
                ...currentMeal,
                quantity: (currentMeal.quantity += 1),
                totalPrice: currentMeal.quantity * currentMeal.price,
              },
            ],
      };
    }
    case RETRIEVE_TO_MEAL_QUANTITY: {
      const currentMeal = state.basket.find(
        (meal) => meal.id === action.payload.mealId
      );

      return {
        ...state,
        basket:
          currentMeal !== undefined
            ? [
                ...state.basket.filter(
                  (meal) => meal.id !== action.payload.mealId
                ),
                {
                  ...currentMeal,
                  quantity:
                    currentMeal.quantity > 0 ? (currentMeal.quantity -= 1) : 0,
                  totalPrice: currentMeal.quantity * currentMeal.price,
                },
              ]
            : [...state.basket],
      };
    }
    default:
      return state;
  }
};

export default reducer;
