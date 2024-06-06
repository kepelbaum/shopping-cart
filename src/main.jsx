import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import Head from './Head.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import routes from "./routes";

// const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>,
)

//<RouterProvider router={router} />