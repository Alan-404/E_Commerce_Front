import { LOAD_BANNER_FAIL, LOAD_BANNER_SUCCESS } from "../common/contants";

export const BannerReducer = (state, action) => {
    const {type, payload} = action;


    switch(type){
        case LOAD_BANNER_SUCCESS: {
            return {
                ...state,
                banners: payload,
                bannerLoading: false
            }      
        }
        case LOAD_BANNER_FAIL: {
            return {
                ...state, 
                banners: [],
                bannerLoading: true
            }
        }
        default: 
            return state;
    }
}