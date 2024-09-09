import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import Wishlist from "../components/Wishlist/Wishlist";
import Basket from "../components/Basket/Basket";

const Baskets = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <Wishlist />
      <Basket />
      <ProductList product={props.product} />
      <Footer />
    </div>
  );
};

export default Baskets;
