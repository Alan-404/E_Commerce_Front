import axios from "axios";
import { createContext, useReducer } from "react";
import {ProductReducer} from '../reducers/ProductReducer'
import { PRODUCT_LOAD_SUCCESS, PRODUCT_LOAD_FAIL, apiUrl } from "../common/contants";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [productState, dispatch] = useReducer(ProductReducer, {
        products: [],
        productLoading: true,
        category: null
    });


    const getProduct = async () => {
        try 
        {
            const response = await axios.get(`${apiUrl}/product`);
            if (response.data.success)
            {
                dispatch({
                    type: PRODUCT_LOAD_SUCCESS,
                    payload: response.data.products
                })
            }
        }
        catch(err)
        {
            dispatch({type: PRODUCT_LOAD_FAIL})
        }
    }

    const getProductByCategory =async (slug) => {
        try 
        {
            const response = await axios.get(`${apiUrl}/product/`+ slug);
            if (response.data.success)
            {
                dispatch({
                    type: PRODUCT_LOAD_SUCCESS,
                    payload: response.data.products
                })
            }
        }
        catch(err)
        {
            console.log(err.message);
            dispatch({type: PRODUCT_LOAD_FAIL})
        }
    }

    const ProductContextData = {getProduct, productState, getProductByCategory}

    return (
        <ProductContext.Provider value = {ProductContextData}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider