// TODO: use this store variable to create a store.

import {  legacy_createStore ,combineReducers} from "redux"
import { productReducer } from "./product/product.reducer";
const root = combineReducers({
  product  :productReducer ,
})

// export const store = {root};
export const store = legacy_createStore(root)

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}



