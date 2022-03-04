import axios from "axios";

export const fetchMealTime = (m) => async (dispatch) => {
  try {
    dispatch({type: "MEALTIME_REQUEST"});
    console.log("HELLo", m)
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=veg&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&mealType=${m}&imageSize=LARGE&random=true`
    );
    dispatch({ type: "MEALTIME_SUCCESS", payload: res.data.hits });
  } catch (error) {
  }
};


export const fetchIndian = () => async (dispatch) => {
  try {
    dispatch({type: "INDIAN_REQUEST"});
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=veg&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&cuisineType=indian&imageSize=LARGE&random=true`
    );
    dispatch({ type: "INDIAN_SUCCESS", payload: res.data.hits });
  } catch (error) {
  }
};

export const fetchDessert = () => async (dispatch) => {
  try {
    dispatch({ type: "DESSERT_REQUEST" });
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&dishType=dessert&imageSize=LARGE&random=true`
    );
    dispatch({ type: "DESSERT_SUCCESS", payload: res.data.hits });
  } catch (error) {}
};
