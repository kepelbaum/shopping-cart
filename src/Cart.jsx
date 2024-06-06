import { useEffect, useState, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import {ShopContext} from './Home.jsx';

const Cart = () => {
    const { cart, setCart } = useContext(ShopContext);
    return (
        <p>{JSON.stringify(cart)}</p>
    )
}

export default Cart