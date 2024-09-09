import React, { useContext } from "react";
import style from "./ProductList.module.css";
import { AllContext } from "../../contexts/AllContext";
import { HeartOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { AllProductsContext } from "../../contexts/AllProductsContext";

const ProductList = (props) => {
  console.log(props);
  const { addToBasket, addToWishlist, datas } = useContext(AllContext);
  const { stars } = useContext(AllProductsContext);
  let { id } = useParams();
  console.log(id);

  const filteredItems = id > 0 ? stars.filter((p) => p.id == id) : stars;

  return (
    <div>
      <ul>
        {filteredItems.map((product) => {
          return (
            <div className={style.allProducts} key={product.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${product.id}`}
              >
                <div className={style.productside}>
                  <img className={style.rare} src={product.img} alt="" />
                  <div className={style.datalar}>
                    <div className={style.around}>
                      <h4 className={style.aroundName}>{product.name}</h4>
                      <div>{product.title}</div>
                    </div>
                    <h4 className={style.price0}>{product.price}</h4>
                    <div className={style.color}>{product.color}</div>
                    <div className={style.size}>{product.size}</div>

                    <div className={style.btn0}>
                      <button
                        className={style.basketadd}
                        onClick={() => addToBasket(product)}
                      >
                        Add to Basket
                        <br />
                        Get it Shipped
                      </button>
                      <div onClick={() => addToWishlist(product)}>
                        <HeartOutlined className={style.heart} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
