import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav/TopNav";
import CatNav from "./Components/CatNav/CatNav";
import LandingPage from "./Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/productDetails" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
