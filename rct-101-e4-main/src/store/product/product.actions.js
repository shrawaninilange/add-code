// Product actions here
import {
                      GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR
} from "./product.types"




export const getp = (dispatch) => {
                      dispatch({ type:  GET_PRODUCTS_LOADING });
                      axios
                        .get("http://localhost:8080/products")
                    
                        .then((r) => {
                          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: r.data });
                        })
                    
                        .catch((r) => {
                          dispatch({ type: GET_PRODUCTS_ERROR });
                        });
                    };