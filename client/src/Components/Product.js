
import React from 'react'
import {NavLink} from 'react-router-dom';
import Card from './Card';

const Product = ({product}) => {
    return (
        <div>
            <NavLink to='/home'> Home </NavLink>
            <Card product={product} showDescription />
        </div>
    )
}

export default Product;