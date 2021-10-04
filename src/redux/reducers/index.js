
import { combineReducers } from "redux";
import { productReducers } from "./productReducers" 


const reducers = combineReducers({
    allProducts:productReducers,
})