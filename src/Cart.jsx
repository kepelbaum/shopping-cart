import { useEffect, useState, useContext } from 'react';
import {ShopContext} from './Head.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, setCart, count, setCount } = useContext(ShopContext);
    const [total, setTotal] = useState(0);

    function calcTotal() {
        let newtotal = 0;
        cart.forEach((ele) => {
            let temp = Number(ele.price) * Number(ele.quantity);
            newtotal += temp;
        })
        newtotal = newtotal.toFixed(2);
        setTotal(newtotal);
    }
    useEffect(() => {
        calcTotal();
        }, [cart]);

    function handleCheckout() {
        setCart([]);
        setTotal(0);
        setCount(0);
    }

    function removeItem(e) {
        let id = Number(e.target.value);
        let temp = cart;
        let arr = [];
        let qty = 0;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id !== id) {
                arr.push(temp[i]);
            }
            else {
                qty = temp[i].quantity;
            }
        }
        setCart(arr);
        setCount(count - qty); 
       }
    
       function changeQty(e) {
        let num = Number(e.target.value);
        if (num > 0) {
            let id = Number(e.target.getAttribute("param"));
            let temp = cart;
            let old = 0;
            let arr = []
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id === id) {
                    old = temp[i].quantity;
                    arr.push({...temp[i], quantity: num});
                }
                else {
                    arr.push(temp[i]);
                }
            }
        setCart(arr);
        setCount(count - old + num); 
        }
       }

    return (
    (cart && (
        <div className="wrapper">
            <div className='header'><p>FakeStore</p><ul><li><Link to='/'>Home</Link></li><li>Cart{' ('}{count}{')'}</li></ul></div>
            <div className='blocks'>
              {cart.map((ele) => {
                return <div className='horizontal' key={ele.id}>
                    <img src={ele.image} alt={ele.title}></img>
                    <p>{ele.title.length > 20 ? ele.title.slice(0, 20)+'...' : ele.title}</p>
                    <p className='light'>{'$'}{ele.price}{' x '}</p>
                    <input className='big' type='number' defaultValue={ele.quantity} param={ele.id} onChange={changeQty}></input>
                    <p>{'$'}{Number(ele.price) * Number(ele.quantity)}</p>
                    <button className='remove' value={ele.id} onClick={removeItem}>REMOVE</button>
                    </div>
              })}
              <Link to='../checkout' className='checklink'><button className='checkout' onClick={handleCheckout}>CHECKOUT{' ($'}{total}{')'}</button></Link>
            </div>
            <div className='footer'>I'm a footer!</div>
        </div>
      )) || <h1>Loading...</h1>
    )
}

export default Cart