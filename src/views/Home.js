import React from 'react'
import NavBarMenu from '../components/Navbars/NavbarMenu'
import Dashboard from '../components/Homes/Dashboard'
import Container from 'react-bootstrap/Container'
import Product from '../components/Homes/Product'

const Home = ({infoRoute}) => {

    let body ;

    body = (
        <>
        {infoRoute === 'welcome' && <Dashboard />}
        {infoRoute === 'product' && 
            <>
                <Product />
            </>}
        </>
    )
    return (
        <div>
            <NavBarMenu />     
            <div className = "myBG" style = {{height:"100vh"}}>
                <Container className = "mt-4">
                    {body}
                </Container>
            </div> 
        </div>
    )
}

export default Home
