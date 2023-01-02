import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./productreducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductReducer,
})

export default reducers;