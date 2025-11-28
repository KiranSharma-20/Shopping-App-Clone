import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./screens/Home";
import HeaderLayout from "./layouts/HeaderLayout";
import Products from "./screens/Products";
import Cart from "./screens/Carts";
import Orders from "./screens/Orders";
import WishList from "./screens/WishLists";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import toast, { Toaster } from "react-hot-toast";
import Address from "./Components/Address";
import OrderPlaced from "./Components/OrderPlaceed";

function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/address" element={<Address />} />
        <Route path="/order_confirmation" element={<OrderPlaced />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishList" element={<WishList />} />
      </Route>
    </Routes>
  );
}

export default App;
