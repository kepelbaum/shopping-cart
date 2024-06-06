import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import routes from "./routes";
import { useEffect, useState, createContext, useContext } from 'react';
import Cart from './Cart.jsx';

export const ShopContext = createContext({
        data: {},
        cart: [],
        setCart: () => {},
        count: 0,
    });


const Head = ({ delay }) => {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", quantity: 1, price: 109.95, image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}]); /* need: id, title, image, quantity, price */
    const [count, setCount] = useState(1);
    
    
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
            </Routes>
        </BrowserRouter>
     </ShopContext.Provider>
    )
}

export default Head