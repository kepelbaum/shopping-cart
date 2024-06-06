import { useEffect, useState, createContext, useContext } from 'react';
import Cart from './Cart.jsx';
import { Link } from 'react-router-dom';
import { ShopContext } from './Head.jsx';

// export const ShopContext = createContext({
//     data: {},
//     cart: [],
//     setCart: () => {},
// });

const Home = ({ delay }) => {
    // const [data, setData] = useState(null);
    // const [cart, setCart] = useState([{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", quantity: 1, price: 109.95, image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}]); /* need: id, title, image, quantity, price */
    const [curr, setCurr] = useState([]);
    const { data, cart, setCart, count, setCount } = useContext(ShopContext);


    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("https://fakestoreapi.com/products/", { mode: "cors" })
    //         .then((response) => response.json())
    //         .then((response) => setData(response))
    //         .catch((error) => console.error(error));
    //     }   , delay);
    //     }, [delay]);

    // function nullify() {
    //     setCurr([]);
    // }

    // useEffect(() => {
        
    // })

    function handleSubmit(e) {
        let id = Number(e.target.getAttribute("param"));
        let already = cart;
        let temp = curr;
        let q = 1; /*default qty */
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                q = temp[i].quantity;
                break;
            }
        }
        let toggle = 0;
        for (let i = 0; i < already.length; i++) {
            if (already[i].id === id) {
                already[i].quantity = Number(already[i].quantity) + Number(q);
                toggle = 1;
            }
        }
        if (toggle === 0) {
            data.forEach((ele) => {
                if (ele.id === id) {
                    already.push({id, title: ele.title, image: ele.image, price: ele.price, quantity: q});
                }
            })
        }
        setCart(already);
        let newcount = Number(q) + Number(count);
        setCount(newcount);
    }

    function handleQty (e) {
        let id = Number(e.target.getAttribute("param"));
        let temp = curr;
        let toggle = 0;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp[i].quantity = e.target.value;
                toggle = 1;
            }
        }
        if (toggle === 0) {
            data.forEach((ele) => {
                if (ele.id === id) {
                    temp.push({id, quantity: e.target.value});
                }
            })
        }
        setCurr(temp);
    }
    return (
        (data && (
            <div className="wrapper">
                <div className='header'><p>FakeStore</p><ul><li>Home</li><li><Link to='cart'>Cart{' ('}{count}{')'}</Link></li></ul></div>
                <div className='grid'>
                  {data.map((ele) => {
                    return <div className='card' key={ele.id}>
                        <img src={ele.image} alt={ele.title}></img>
                        <p>{ele.title.length > 20 ? ele.title.slice(0, 20)+'...' : ele.title}</p>
                        <p>{'$'}{ele.price}</p> 
                        <input type='number' min='1' placeholder='1' param={ele.id} onChange={handleQty}></input>
                        <button className='add' param={ele.id} onClick={handleSubmit}>ADD TO CART</button>
                        </div>
                  })}
                </div>
                <div className='footer'>I'm a footer!</div>
            </div>
          )) || <h1>Loading...</h1>
    )
}

export default Home


//{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", quantity: 1, price: 109.95, image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}