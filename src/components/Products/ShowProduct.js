/* import axios from 'axios' */
import React from 'react'
import {useContext, useEffect, useState} from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../common/contants'


const ShowProduct = () => {

    const location = useLocation();

    const {productState, getProductByCategory} = useContext(ProductContext);

    let [nameCategory, setNameCategory] = useState('');


    useEffect (async () => {
        try 
        {
            const slugArr = location.pathname.split('/');
            await getProductByCategory(slugArr[2]);
            const response = await axios.post(`${apiUrl}/category/name`, {slug: slugArr[2]})
            setNameCategory(nameCategory = response.data.name);
        }
        catch (err)
        {
            console.log(err.message);
        }
    }, [])

    return (
        <div>
            <h2 className = "text-success" style = {{marginLeft: "20px"}}>Danh Mục: {nameCategory}</h2>
            <div className = "d-flex flex-wrap">           
                {
                    productState.products.map(item => (
                        <Link className = "text-decoration-none" to = "#">
                            <Card style={{ width: '18rem' }} className = 'm-4' key = {item._id}>
                                <Card.Img style={{ width: '100%' }} variant="top" src={item.image[0]} className = "imgProduct"/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Giá: {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className = "text-decoration-underline">đ</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                }    
            </div>
        </div>
    )
}

export default ShowProduct
