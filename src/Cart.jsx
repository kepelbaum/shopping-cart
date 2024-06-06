import { useEffect, useState, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import {ShopContext} from './Head.jsx';

const Cart = () => {
    const { cart, setCart } = useContext(ShopContext);
    return (
    (cart && (
        <div className="wrapper">
            <div className='header'><p>FakeStore</p><ul><li>Home</li><li>Cart</li></ul></div>
            <div className='grid'>
              {cart.map((ele) => {
                return <div className='card' key={ele.id}>
                    <img src={ele.image} alt={ele.title}></img>
                    <p>{ele.title.length > 20 ? ele.title.slice(0, 20)+'...' : ele.title}</p>
                    <p>{'$'}{ele.price}</p>
                    {/* <input type='number' min='1' placeholder='1' param={ele.id}></input>
                    <button className='add' param={ele.id}>ADD TO CART</button> */}
                    </div>
              })}
            </div>
            <div className='footer'>I'm a footer!</div>
        </div>
      )) || <h1>Loading...</h1>
    )
}

export default Cart