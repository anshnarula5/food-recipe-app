import { combineReducers } from "redux";
import {breakfastReducer, indianReducer, dessertReducer} from "./recipeReducers";

const rootReducer = combineReducers({
    breakfast: breakfastReducer,
    indian: indianReducer,
    dessert : dessertReducer
});

export default rootReducer;
