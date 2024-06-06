// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createContext, useEffect, useState } from 'react';
import Home from './Home.jsx';
import Cart from './Cart.jsx'

export const ShopContext = createContext({
    data: {},
    cart: [],
    setCart: () => {},
})


const App = ({ delay }) => {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([{id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", quantity: 1, price: 109.95, image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}]); /* need: id, title, image, quantity, price */
  
      useEffect(() => {
      setTimeout(() => {
          fetch("https://fakestoreapi.com/products/", { mode: "cors" })
          .then((response) => response.json())
          .then((response) => setData(response))
          .catch((error) => console.error(error));
      }   , delay);
      }, [delay]);

  return (
    <Home />
  )
}

export default App


// <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //     </>
