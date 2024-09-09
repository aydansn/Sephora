import React from "react";
import style from "./Basket.module.css";

const Basket = ({ basket }) => {
  return(
    <div>
      <h2></h2>
      {basket && basket.length > 0 ? 
        <ul>
          {basket.map(datas => 
            <li key={datas.id}>
              {datas.name} - ${datas.price}
            </li>
          )}
        </ul>
       :<p></p>}
    </div>
    );
};

export default Basket;
