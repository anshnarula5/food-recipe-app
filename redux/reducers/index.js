import { combineReducers } from "redux";
import {breakfastReducer, indianReducer, dessertReducer, mealTimeReducer, searchReducer} from "./recipeReducers";

const rootReducer = combineReducers({
    mealTime: mealTimeReducer,
    indian: indianReducer,
    dessert: dessertReducer,
    searchFood : searchReducer
});

export default rootReducer;
