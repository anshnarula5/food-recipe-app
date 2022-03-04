import { combineReducers } from "redux";
import {breakfastReducer, indianReducer, dessertReducer, mealTimeReducer} from "./recipeReducers";

const rootReducer = combineReducers({
    mealTime: mealTimeReducer,
    indian: indianReducer,
    dessert : dessertReducer
});

export default rootReducer;
