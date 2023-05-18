import { NavLink, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Home } from "./components/Home";
import { Wishlist } from "./components/Wishlist";
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";
import { AddressManagement } from "./components/AddressManagement";
import { AboutProduct } from "./components/AboutProduct";
import { Products } from "./components/Products";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/wishlist" >Wishlist</NavLink>
      <NavLink to="/cart" >Cart</NavLink>
      <NavLink to="/login" >Login</NavLink>
      <NavLink to="/address" >Show Address</NavLink>
      <NavLink to="/products" >Products</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/address" element={<AddressManagement />}></Route>
        <Route path="/product/:productId" element={<AboutProduct />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:categoryId" element={<Products />}></Route>
      </Routes>
    </div>
  );
}
