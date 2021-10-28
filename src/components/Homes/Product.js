/* import axios from 'axios' */
import React from 'react'
import ShowProduct from '../Products/ShowProduct'
import MenuBar from '../Products/MenuBar'


const Product = () => {

    

    return (
        <div className = "d-flex pt-4 bg-light" style = {{height: "100vh"}}>
            <MenuBar />
            <ShowProduct />
        </div>      
    )
}

export default Product
