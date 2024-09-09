import React, { useLayoutEffect } from "react";
import style from "./Wishlist.module.css";

const Wishlist = ({ wishlist }) => {
  return(
  <div>
    <h2></h2>
    {wishlist && wishlist.length > 0 ? 
      <ul>
        {wishlist.map(datas => 
          <li key={datas.id}>
            {datas.name} - ${datas.price}
          </li>
        )}
      </ul>
     :<p></p>}
  </div>
  );
};

export default Wishlist;
