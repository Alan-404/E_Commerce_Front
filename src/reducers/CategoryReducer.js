import { LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAIL } from "../common/contants";

export const CategoryReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case LOAD_CATEGORIES_SUCCESS: {
            return {
                ...state, 
                categories: payload,
                categoryLoading: false
            }
        }
        case LOAD_CATEGORIES_FAIL: {
            return {
                ...state,
                categories: [],
                categoryLoading: true
            }
        }
        default:
            return state;
    }
}