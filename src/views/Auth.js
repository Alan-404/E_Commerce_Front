import React from 'react'
import LoginForm from '../components/Auths/LoginForm'
import RegisterForm from '../components/Auths/RegisterForm'
import { AuthContext } from '../contexts/AuthContext'
import {useContext} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router'

const Auth = ({authRoute}) => {

    const {
        authState: {authLoading, isAuthenticated}
    } = useContext(AuthContext);

    let body;

    if (authLoading)
    {
        body = (
            <div className='d-flex justify-content-center mt-2'>
				<Spinner animation='border' variant='info' />
			</div>
        )
    }
    if (isAuthenticated)
    {
        return <Redirect to= '/welcome' />
    }
    else body = (
        <>
				{authRoute === 'login' && <LoginForm />}
				{authRoute === 'register' && <RegisterForm />}
		</>
    )
    return (
        <div className = "AuthLanding">
            <div className = 'dark-overlay text-light'>
                <div>
                    {body}
                </div>
            </div>
            
        </div>
    )
}

export default Auth
