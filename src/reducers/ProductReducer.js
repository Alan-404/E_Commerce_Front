import {PRODUCT_LOAD_FAIL, PRODUCT_LOAD_SUCCESS } from "../common/contants"

export const ProductReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case PRODUCT_LOAD_SUCCESS:
            return {
                ...state,
                products: payload,
                productLoading: false
            }
        case PRODUCT_LOAD_FAIL:
            return {
                ...state,
                products: [],
                productLoading: true
            }
        default: 
            return state;
    }
}