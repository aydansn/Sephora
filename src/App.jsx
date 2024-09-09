import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import React, { Component, useContext } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import rare from "../src/assets/images/rare.webp";
import blush from "../src/assets/images/blush.webp";
import AllProducts from "./components/AllProducts/AllProducts";
import { AllProductsContext } from "./contexts/AllProductsContext";
import Basket from "./components/Basket/Basket";

const App = () => {
  const { stars } = useContext(AllProductsContext);
  // const datas = [
  //   {
  //     img: rare,
  //     id: 1,
  //     name: "Rare Beauty by Selena Gomez",
  //     title: "Soft Pinch Liquid Blush",
  //     price: "$23.00",
  //     button: "Add to Cart",
  //     type: "glosses",
  //     color: "Color: Encourage - soft neutral pink",
  //     size: "Size 0.25 oz/ 7.5 mL",
  //   },
  //   {
  //     img: blush,
  //     id: 2,
  //     name: "Rare Beauty by Selena Gomez",
  //     title: "Stay Vulnerable Melting Cream Blush",
  //     price: "$22.00",
  //     button: "Add to Cart",
  //     type: "blushes",
  //     color: "Color: Encourage - soft neutral pink",
  //     size: "Size 0.17 oz/ 5 g",
  //   },
  // ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Product product={stars} />} />
          <Route path="/basket/:id" element={<Basket product={stars} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
