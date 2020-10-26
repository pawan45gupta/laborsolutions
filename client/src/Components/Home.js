import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from './Card';


const Home = ({products}) => {
    return (
        <div>
           <NavLink to='/'> Home </NavLink>
           {products.map(product => 
            <p>
            <Card product={product}/>
            </p>
           )}
        </div>
    )
}

export default Home;