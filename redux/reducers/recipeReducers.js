export const breakfastReducer = (state = { breakfast: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "BREAKFAST_REQUEST":
      return { loading: true };
    case "BREAKFAST_SUCCESS":
      return { loading: false, breakfast: payload };
    default:
      return state;
  }
};
export const indianReducer = (state = { indian: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INDIAN_REQUEST":
      return { loading: true };
    case "INDIAN_SUCCESS":
      return { loading: false, indian: payload };
    default:
      return state;
  }
};
export const dessertReducer = (state = { dessert: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DESSERT_REQUEST":
      return { loading: true };
    case "DESSERT_SUCCESS":
      return { loading: false, dessert: payload };
    default:
      return state;
  }
};
