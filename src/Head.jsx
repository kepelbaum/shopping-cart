import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext} from 'react';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';

export const ShopContext = createContext({
        data: {},
        cart: [],
        setCart: () => {},
        count: 0,
    });


const Head = ({ delay }) => {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]); /* need: id, title, image, quantity, price */
    const [count, setCount] = useState(0);
    
    
    useEffect(() => {
        setTimeout(() => {
         fetch("https://fakestoreapi.com/products/", { mode: "cors" })            
        .then((response) => response.json())
         .then((response) => setData(response))
        .catch((error) => console.error(error));
         }   , delay);
        }, [delay]);

    return (
    <ShopContext.Provider value={{ data, cart, setCart, count, setCount }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
     </ShopContext.Provider>
    )
}

export default Head
