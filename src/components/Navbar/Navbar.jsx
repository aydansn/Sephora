import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import rare from "../../assets/images/rare.webp";
import blush from "../../assets/images/blush.webp";
import crema from "../../assets/images/cremawebp.webp";
import fon from "../../assets/images/fon.webp";
import fav from "../../assets/images/fav.webp";
import parfum from "../../assets/images/parfum.webp";
import zoom from "../../assets/images/zoom.webp";
import ten from "../../assets/images/ten.webp";
import ulduz from "../../assets/images/star.svg";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  BankOutlined,
  UserSwitchOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { AllContext } from "../../contexts/AllContext";
import sephora from "../../assets/images/seproea.png";

const Navbar = () => {
  const { wishlist, basket } = useContext(AllContext);
  const [search, setSearch] = useState(false);
  console.log("search");
  const products = [
    {
      img: rare,
      id: 1,
      name: "Rare Beauty by Selena Gomez",
      title: "Soft Pinch Liquid Blush",
      price: "$23.00",
      button: "Add to Cart",
      type: "glosses",
      color: "Color: Encourage - soft neutral pink",
      size: "Size 0.25 oz/ 7.5 mL",
    },
    {
      img: blush,
      id: 2,
      name: "Rare Beauty by Selena Gomez",
      title: "Stay Vulnerable Melting Cream Blush",
      price: "$22.00",
      button: "Add to Cart",
      type: "blushes",
      color: "Color: Encourage - soft neutral pink",
      size: "Size 0.17 oz/ 5 g",
    },
    {
      img: fav,
      id: 1,
      name: "Rare Beauty by Selena Go...",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
    {
      img: crema,
      id: 2,
      name: "Rare Beauty by Selena Gomez",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
  ];

  const [myProducts, setMyProducts] = useState(products);
  const handleSearch = (value) => {
    if (value) setSearch(true);
    if (!value) setSearch(false);

    const filterlenmishProduct = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filterlenmishProduct);
    setMyProducts(filterlenmishProduct);
  };
  return (
    <nav className={style.navbar}>
      <img className={style.logos} src={sephora} alt="" />
      <div
        style={{ background: "linear-gradient(to right, #ffdde1, #ee9ca7); " }}
        className={style.orta}
      >
        <div className={style.int}>
          <input
            className={style.input1}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="search for products"
          />
        </div>
        {search &&
          myProducts.map((products, idx) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/${products.id}`}
              key={idx}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "20px" }} src={products.img} alt="" />
                <div>
                  {" "}
                  <div style={{ color: "black" }}>{products.title}</div>
                  <div style={{ color: "black" }}>{products.price}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className={style.sideAll}>
        <div className={style.side}>
          <div>
            {" "}
            <BankOutlined className={style.icon1} />
          </div>
          <div className={style.center}>
            <span>
              <b>Stores & Services</b>
            </span>
            <p className={style.choose}>Choose Your Store</p>
          </div>
        </div>
        <div className={style.side}>
          <UserSwitchOutlined className={style.icon1} />
          <span>Community</span>
        </div>
        <div className={style.side}>
          <div >
            {" "}
            <GithubOutlined className={style.icon1} />
          </div>
          <div className={style.center}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/signin`}
            >
              <h4>Sign In</h4>
            </Link>
            <p>for FREE Shipping 🚚</p>
          </div>
        </div>
      </div>
      <div style={style.sideBySide}>
        <HeartOutlined className={style.heartIcon} />{" "}
        <span className={style.num}> ({wishlist.length})</span>
        <ShoppingCartOutlined className={style.heartIcon} />{" "}
        <span className={style.num}>({basket.length})</span>
      </div>
    </nav>
  );
};

export default Navbar;
