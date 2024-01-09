import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './Pages/AboutUs/AboutUs';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import ReturnPolicy from './Pages/ReturnPolicy/ReturnPolicy';
import PaymentMethods from './Pages/PaymentMethods/PaymentMethods';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:"about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path:"shipping-policy",
        element: <ShippingPolicy></ShippingPolicy>
      },
      {
        path:"return-policy",
        element:<ReturnPolicy></ReturnPolicy>
      },
      {
        path:"payment-methods",
        element:<PaymentMethods></PaymentMethods>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
