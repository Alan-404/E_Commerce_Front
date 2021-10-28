import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {useContext, useEffect} from 'react'
import { CategoryContext } from '../../contexts/CategoryContext'
import {Link} from 'react-router-dom'

const MenuBar = () => {


    const {categoryState,  getCategory } = useContext(CategoryContext);

    useEffect(async () => {
        try 
        {
            await getCategory();
        }
        catch(err)
        {
            console.log(err.message);
        }
    }, [])

    return (
        <div className = "border-right">
            <h6 style = {{marginLeft: "10px"}}>Danh Mục Sản Phẩm</h6>
            <ListGroup>
                {
                    categoryState.categories.map(item => (
                        <Link to = {{pathname: `/product/${item.slug}`}} className = "text-decoration-none">
                            <ListGroup.Item action variant="info" key = {item._id}>{item.name}</ListGroup.Item>
                        </Link>                      
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default MenuBar
