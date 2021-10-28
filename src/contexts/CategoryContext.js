import { createContext, useReducer } from "react";
import { CategoryReducer } from "../reducers/CategoryReducer";
import axios from "axios";
import { apiUrl, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAIL } from "../common/contants";

export const CategoryContext = createContext();

const CategoryContextProvider = ({children}) => {


    const [categoryState, dispatch] = useReducer(CategoryReducer, {
        categories: [],
        categoriesLoading: true
    })


    const getCategory = async () => {
        try 
        {
            const response = await axios.get(`${apiUrl}/category`);

            if (response.data.success)
            {
                dispatch ({
                    type: LOAD_CATEGORIES_SUCCESS,
                    payload: response.data.categories
                })
            }
        }
        catch (err)
        {
            console.log(err.message);
            dispatch({type: LOAD_CATEGORIES_FAIL});
        }
    }


    const CategoryContextData = {getCategory, categoryState};


    return (
        <CategoryContext.Provider value = {CategoryContextData}>
            {children}
        </CategoryContext.Provider>
    )

}

export default CategoryContextProvider;