import axios from "axios";

export const fetchSearchresults = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SEARCH_REQUEST" });
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=53f9c771&app_key=4fcebc5db45c3a7aac2e1b746c3052fe&imageSize=LARGE`
    );
    dispatch({
      type: "GET_SEARCH_SUCCESS",
      payload: { foods: res.data.hits },
    });
  } catch (error) {}
};
