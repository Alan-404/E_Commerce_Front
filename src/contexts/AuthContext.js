import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { LOCAL , apiUrl} from "../common/contants";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [authState, dispatch] = useReducer(AuthReducer, {
		authLoading: true,
		isAuthenticated: false,
        username: null
	})


    const loadAccount = async () => {
        if (localStorage[LOCAL])
            setAuthToken(localStorage[LOCAL]);

        try {
            const response = await axios.get(`${apiUrl}/account`);
            if (response.data.success)
            {
                dispatch({
                    type: 'SET_AUTH',
                    payload: ({isAuthenticated: true, username: response.data.username})
                })
            }
        }
        catch (err)
        {
            localStorage.removeItem(LOCAL);
            setAuthToken(null);
            dispatch({
                type: 'SET_AUTH',
                payload: ({isAuthenticated: false, username: null})
            })
        }
    }

    useEffect (() => loadAccount(), []);

    const loginAccount = async (loginInfor) => {
        try 
        {
            const response = await axios.post(`${apiUrl}/account/login`, loginInfor);
            
            if (response.data.success)
            {
                localStorage.setItem(LOCAL, response.data.accessToken);
            }
            await loadAccount();

            return response.data;
        }
        catch (err)
        {
            console.log(err.message);
        }
    }

    const registerAccount = async registerInfo => {
        try 
        {
            const response = await axios.post(`${apiUrl}/user/register`, registerInfo)
            if (response.data.success)
				localStorage.setItem(
					LOCAL,
					response.data.accessToken
				)

			await loadAccount()
            return response.data;
        }
        catch (err)
        {
            console.log(err.message);
        }
    }

    const logoutAccount = () => {
        localStorage.removeItem(LOCAL);
        dispatch({
            type: 'SET_AUTH',
            payload: {isAuthenticated: false, username: null}
        })
    }

    const AuthContextData = {loginAccount, logoutAccount,  registerAccount, authState};

    return (
        <AuthContext.Provider value = {AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;