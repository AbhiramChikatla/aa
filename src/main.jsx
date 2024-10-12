import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutUs from "../src/pages/AboutUs.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Milk from "./pages/Milk.jsx";
import Contact from "./pages/Contact.jsx";
import Register from "./pages/Register.jsx";
import LoginForCustomer from "./pages/LoginForCustomer.jsx";
import LoginForVendor from "./pages/LoginForVendor.jsx";
import { UserContextProvider } from "./context/userContext.jsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/milk", element: <Milk /> },
    { path: "/register", element: <Register /> },
    { path: "/login-customer", element: <LoginForCustomer /> },
    { path: "/login-vendor", element: <LoginForVendor /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
);
