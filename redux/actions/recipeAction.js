import axios from "axios";

export const fetchMealTime = (m) => async (dispatch) => {
  try {
    dispatch({type: "MEALTIME_REQUEST"});
    console.log("HELLo", m)
    const res = await axios.get(
      `https://api.edamam.com/search?q=veg&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&mealType=${m}`
    );
    dispatch({ type: "MEALTIME_SUCCESS", payload: res.data.hits });
  } catch (error) {
  }
};


export const fetchIndian = () => async (dispatch) => {
  try {
    dispatch({type: "INDIAN_REQUEST"});
    const res = await axios.get(
      `https://api.edamam.com/search?q=veg&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=indian`
    );
    dispatch({ type: "INDIAN_SUCCESS", payload: res.data.hits });
  } catch (error) {
  }
};

export const fetchDessert = () => async (dispatch) => {
  try {
    dispatch({ type: "DESSERT_REQUEST" });
    const res = await axios.get(
      `https://api.edamam.com/search?q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&dishType=dessert`
    );
    dispatch({ type: "DESSERT_SUCCESS", payload: res.data.hits });
  } catch (error) {}
};
