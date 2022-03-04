export const mealTimeReducer = (state = { mealTime: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MEALTIME_REQUEST":
      return { loading: true };
    case "MEALTIME_SUCCESS":
      return { loading: false, mealTime: payload };
    default:
      return state;
  }
};
export const lunchReducer = (state = { lunch: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LUNCH_REQUEST":
      return { loading: true };
    case "LUNCH_SUCCESS":
      return { loading: false, lunch: payload };
    default:
      return state;
  }
};
export const teaReducer = (state = { tea: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TEA_REQUEST":
      return { loading: true };
    case "TEA_SUCCESS":
      return { loading: false, tea: payload };
    default:
      return state;
  }
};
export const dinnerReducer = (state = { dinner: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DINNER_REQUEST":
      return { loading: true };
    case "DINNER_SUCCESS":
      return { loading: false, dinner: payload };
    default:
      return state;
  }
};
export const snackReducer = (state = { snack: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SNACK_REQUEST":
      return { loading: true };
    case "SNACK_SUCCESS":
      return { loading: false, snack: payload };
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
