import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Basket from "../components/Basket/Basket";
import Wishlist from "../components/Wishlist/Wishlist";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import LastFoot from "../components/LastFoot/LastFoot";

const Product = (props) => {
  console.log(props);

  return (
    <div>
      <Navbar />
      <Basket />
      <Wishlist />
      <ProductList product={props.product} />
      <Footer />
      <LastFoot />
    </div>
  );
};

export default Product;
