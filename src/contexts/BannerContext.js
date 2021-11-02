import { createContext } from "react";
import { useReducer } from "react";
import { BannerReducer } from "../reducers/BannerReducer";
import axios from "axios";
import { apiUrl, LOAD_BANNER_SUCCESS, LOAD_BANNER_FAIL } from "../common/contants";

export const BannerContext = createContext();

const BannerContextProvider = ({children}) => {

    const [bannerState, dispatch] = useReducer(BannerReducer, {
        banners: [],
        bannersLoading: true
    })

    const getBanners = async () => {
        try 
        {
            
            const response = await axios.get(`${apiUrl}/banner`);
            if (response.data.success)
            {
                dispatch({
                    type: LOAD_BANNER_SUCCESS,
                    payload: response.data.banners
                })
            }
        }
        catch(err)
        {
            console.log(err.message);
            dispatch({
                type: LOAD_BANNER_FAIL
            })
        }
    }

    const BannerContextData = {getBanners, bannerState};

    return (
        <BannerContext.Provider value = {BannerContextData}>
            {children}
        </BannerContext.Provider>
    )
}

export default BannerContextProvider;