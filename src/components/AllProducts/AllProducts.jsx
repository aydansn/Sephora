import React, { useContext } from "react";
import style from "./AllProducts.module.css";
import { AllProductsContext } from "../../contexts/AllProductsContext";
import { Link } from "react-router-dom";
import { AllContext } from "../../contexts/AllContext";

const AllProducts = (props) => {
  console.log(props);
  const { datas } = useContext(AllContext);
  console.log(datas);
  const { stars } = useContext(AllProductsContext);
  console.log(stars);
  return (
    <div>
      {/* <h3 className={style.you}>Chosen For You</h3>
      <div className={style.sideBySides}>
        {stars.map((mehsullar, idx) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${datas.id}`}
              key={idx}
            >
              <div className={style.allBost}>
                <div>
                  <img className={style.dif} src={mehsullar.img} alt="" />
                </div>
                <div className={style.border}>
                  <h6 className={style.ad}>{mehsullar.name}</h6>
                  <p className={style.bashliq}>{mehsullar.title}</p>
                  <h4 className={style.qiymet}>{mehsullar.price}</h4>
                  <div className={style.lastSide}>
                    <div>
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                    </div>
                    <div className={style.view}>{mehsullar.view}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}

      <h3 className={style.you}>New Arrivals</h3>
      <div className={style.sideBySides}>
        {stars.map((mehsullar, idx) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${mehsullar.id}`}
              key={idx}
            >
              <div className={style.allBost}>
                <div>
                  <img className={style.dif} src={mehsullar.img} alt="" />
                </div>
                <div className={style.border}>
                  <h6 className={style.ad}>{mehsullar.name}</h6>
                  <p className={style.bashliq}>{mehsullar.title}</p>
                  <h4 className={style.qiymet}>{mehsullar.price}</h4>
                  <div className={style.lastSide}>
                    <div>
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                      <img className={style.dif1} src={mehsullar.star} alt="" />
                    </div>
                    <div className={style.view}>{mehsullar.view}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
