import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Basket from "../components/Basket/Basket";
import ProductList from "../components/ProductList/ProductList";
import Wishlist from "../components/Wishlist/Wishlist";
import Category from "../components/Category/Category";
import Off from "../components/Off/Off";
import AllProducts from "../components/AllProducts/AllProducts";
import Beauty from "../components/Beauty/Beauty";
import Dyson from "../components/Dyson/Dyson";
import Gifts from "../components/Gifts/Gifts";
import Footer from "../components/Footer/Footer";
import LastFoot from "../components/LastFoot/LastFoot";
const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <Category />
      <Off />
      <AllProducts />
      <Beauty />
      <Dyson />
      <Gifts />
      <AllProducts />
      <Footer />
      <LastFoot />
      {/* <Basket />
      <Wishlist />
      <ProductList product={props.product} /> */}
      <hr />
    </div>
  );
};

export default Home;
