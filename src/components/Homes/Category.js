import React from 'react'
import {useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

import { CategoryContext } from '../../contexts/CategoryContext'
import {useContext} from 'react'

const Category = () => {

    const {getCategory, categoryState} = useContext(CategoryContext);

    useEffect (async () => {
        try 
        {
            await getCategory();
        }
        catch (err)
        {
            console.log(err.message);
        }
        
    }, [])

    return (
        <>
        <div className = "border border-success mt-3 d-flex flex-column p-4 pt-2 bg-light" style = {{borderRadius: "25px"}}>
            <h4 className = "text-info">Danh Mục Sản Phẩm</h4>
            <div className = "d-flex flex-wrap">
                {
                    categoryState.categories.map(item => (
                        <Link  to = {{pathname: `/product/${item.slug}`}} className = "text-decoration-none d-flex flex-column p-2 text-center">
                            <Image style = {{width: "100px", height: "50px"}} src={item.thumbnail} rounded/>
                            {item.name}                         
                        </Link>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Category
