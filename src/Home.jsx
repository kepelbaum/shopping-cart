import { useEffect, useState } from 'react';

const Home = ({ delay }) => {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]); /* need: id, title, image, quantity, price */

    useEffect(() => {
        setTimeout(() => {
            fetch("https://fakestoreapi.com/products/", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.error(error));
        }   , delay);
        }, [delay]);

    function handleQty (e) {
        
    }
    return (
        (data && (
            <div className="wrapper">
                <div className='header'><p>FakeStore</p><ul><li>Home</li><li>Cart</li></ul></div>
                <div className='grid'>
                  {data.map((ele) => {
                    return <div className='card' key={ele.id}>
                        <img src={ele.image} alt={ele.title}></img>
                        <p>{ele.title.length > 20 ? ele.title.slice(0, 20)+'...' : ele.title}</p>
                        <p>{'$'}{ele.price}</p>
                        <input placeholder='1' param={ele.id} onChange={handleQty}></input>
                        <button className='add'>ADD TO CART</button>
                        </div>
                  })}
                </div>
                {cart.map((ele) => {
                    return <p>{ele.title}{': '}{ele.quantity}{'; '}</p>
                })}
                <div className='footer'>I'm a footer!</div>
            </div>
          )) || <h1>Loading...</h1>
    )
}

export default Home


//{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", quantity: 1, price: 109.95, image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
