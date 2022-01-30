import axios from "axios";

export const fetchMeals = (config, store, action) => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  return axiosInstance(config)
    .then((response) => {
      store.dispatch(action(response.data.results));
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("");
    });
};
