import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
        {path: "/cart", element: <Cart />},
    ],
  },
];

export default routes;