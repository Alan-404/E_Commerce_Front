import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../Layouts/AlertMessage'

const RegisterForm = () => {

    const [registerInfo , setRegister] = useState ({
        fName: '',
        lName: '',
        gender: '',
        bDate: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })

    const {fName, lName,gender, bDate, phone, address, email, password} = registerInfo;

    
    const {registerAccount} = useContext(AuthContext);

    const [alert, setAlert] = useState(null);

    const onChangeRegister = event => {
        setRegister({
            ...registerInfo,
            [event.target.name]: event.target.value
        })
    }

    const register = async event => {

        event.preventDefault();

        try 
        {  
            const response = await registerAccount(registerInfo);
            if (!response.success)
            {
                setAlert({type: 'danger', message: response.message});
                setTimeout(() => setAlert(null), 3000);
            }
        }
        catch(err)
        {
            console.log(err.message)
        }
    }

    const checkGender = event =>{
        if (event.checked)
            console.log("ok");
    }
    
    return (
        <div className = "auth p-5 registerAuth mt-5">
            <h2 className = "text-center text-uppercase">Register Account</h2>
            <AlertMessage info = {alert} />
            <Form className = 'd-flex' onSubmit = {register}>
                <div className = 'infoUser'>                   
                    <div className = 'd-flex justify-content-between'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Họ</Form.Label>
                            <Form.Control name = "fName"  value = {fName} type="text" placeholder="First Name" onChange = {onChangeRegister}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control name = "lName" value = {lName}  type="text" placeholder="Last Name"  onChange = {onChangeRegister}/>
                        </Form.Group>
                    </div>
                        <Form.Group className="d-flex mt-2" controlId="formBasicText">
                            <Form.Label className = 'mr-2'>Giới tính</Form.Label>
                            <div key={`inline-radio`} className="mb-3 myRadio">
                                <Form.Check
                                    inline
                                    label="Nam"
                                    name="gender"
                                    type="radio"
                                    value = "Nam"
                                    onChange = {checkGender}
                                />
                                <Form.Check
                                    inline
                                    label="Nữ"
                                    name="gender"
                                    type="radio" 
                                    value = "Nữ"
                                    onChange = {checkGender}                             
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control name = "bDate" value = {bDate}  type="text" placeholder="Ngày sinh..." onChange = {onChangeRegister}/>
                        </Form.Group>           
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control name = "phone" value = {phone} type="text" placeholder="Số điện thoại..." onChange = {onChangeRegister} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Địa chỉ nhà</Form.Label>
                        <Form.Control name = "address" value = {address} type="text" placeholder="Địa chỉ nhà..." onChange = {onChangeRegister}/>
                    </Form.Group>
                </div>
                <div className = 'infoAccount'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name = "email" value = {email} type="email" placeholder="email" onChange = {onChangeRegister}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name = "password" value = {password} type="password" placeholder="Password" onChange = {onChangeRegister}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control placeholder="Password"  onChange = {onChangeRegister}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className = 'my-4'>
                        Register
                    </Button>
                    <p clasName = 'mt-4'>Already have account? <Link className = "ml-2 text-warning" to = "/login">Login</Link></p>
                </div>                
           </Form>
        </div>
    )
}

export default RegisterForm
