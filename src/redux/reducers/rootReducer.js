import {combineReducers} from "redux";
import {productsReducer,selectedProductReducer} from "./productsReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product:selectedProductReducer
})

export default rootReducer;