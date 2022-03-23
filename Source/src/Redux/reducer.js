import { GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from "./actionTypes";


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state=initState, action)=>{
    // add the switch statement for different actions
    console.log(state, action);
    switch (action) {
        case GET_PRODUCT_REQ:
            return {
                ...state,
                loading:true
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading:false
            };
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                isErr:true,
                loading:false
            };
        default :
        return state;
    }
};