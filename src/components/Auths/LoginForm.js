import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import {useState, useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../Layouts/AlertMessage'
const LoginForm = () => {

    const [loginInfor, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const [alert , setAlert] = useState(null);

    const {loginAccount} = useContext(AuthContext);

    const {email, password} = loginInfor;


    const onChangeLogin =  event => {
        setLoginForm({
            ...loginInfor,
            [event.target.name]: event.target.value
        })
    }

    const login = async event => {
        event.preventDefault()
        try
        {
            const response = await loginAccount(loginInfor);
            if (!response.success)
            {
                setAlert({type: 'danger', message: response.message});
                setTimeout(() => setAlert(null), 3000);
            }

        }
        catch (err)
        {
            console.log(err.message);
        }
    }

    return (
        <div className = "auth p-5 mt-5">
            <h2 className = "text-center text-uppercase">Account Login</h2>
            <AlertMessage info = {alert}/>
            <Form onSubmit = {login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name = "email" value = {email} type="email" placeholder="Enter email" onChange= {onChangeLogin}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name = "password" value = {password} type="password" placeholder="Password" onChange= {onChangeLogin}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p clasName = 'mt-5'>Don't have account? <Link className = "ml-2 text-warning" to = "/register">Register</Link></p>
                
            </Form>
        </div>
    )
}

export default LoginForm
