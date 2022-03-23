import axios from "axios";
import { GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
    type: GET_PRODUCT_REQ
});

// action for get products success

export const getProductsSuccess = (products) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: products
});

// action for get products failure

export const getProductsFailure = (error) => ({
    type: GET_PRODUCT_FAILURE,
    payload:error
});

// thunk call to fetch products  list
export const getproductsData = () => {
    
    return (dispatch) => {
        dispatch(getProductsReq)
        axios.get('https://movie-fake-server.herokuapp.com/products')
        .then(response => {
            const products = response.data
            dispatch(getProductsSuccess(products))
        })
        .catch(error =>{
            const err = error.msg
            dispatch(getProductsFailure(err))
        })  
    }
};

// action object for sort  feature

const sortProducts = () => ({});
