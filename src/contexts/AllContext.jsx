import { createContext, useState } from "react";
import rare from "../../src/assets/images/rare.webp";
import blush from "../../src/assets/images/blush.webp";
import crema from "../assets/images/cremawebp.webp";
import fon from "../assets/images/fon.webp";
import fav from "../assets/images/fav.webp";
import parfum from "../assets/images/parfum.webp";
import zoom from "../assets/images/zoom.webp";
import ten from "../assets/images/ten.webp";
import ulduz from "../assets/images/star.svg";
export const AllContext = createContext();
export const AllProvider = (props) => {
  console.log(props);
  const datas = [
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
    {
      img: zoom,
      id: 3,
      name: "Rare Beauty by Selena Gomez",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
    {
      img: parfum,
      id: 4,
      name: "Rare Beauty by Selena Gomez",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
    {
      img: ten,
      id: 5,
      name: "Rare Beauty by Selena Gomez",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
    {
      img: fon,
      id: 6,
      name: "Rare Beauty by Selena Gomez",
      title: "Positive Light Liquid Luminizer Highlight",
      price: "$16.00 - $25.00",
      star: ulduz,
      view: "2.9K",
    },
  ];
  const [wishlist, setWishlist] = useState([]);
  const [basket, setBasket] = useState([]);
  const addToWishlist = (datas) => {
    if (wishlist.find((item) => item.id === datas.id)) {
      return;
    } else {
      setWishlist([...wishlist, datas]);
    }
  };
  const addToBasket = (datas) => {
    const basketItem = basket.find((item) => item.id === datas.id);
    if (basketItem) {
      setBasket(
        basket.map((item) =>
          item.id === datas.id
            ? {
                ...item,
                count: item.count + 1,
                price: item.price + datas.price,
              }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...datas, count: 1 }]);
    }
  };

  const deleteFromWishlist = (datasId) => {
    setWishlist(wishlist.filter((item) => item.id !== datasId));
  };

  const deleteFromBasket = (datas) => [
    setBasket(basket.filter((item) => item.id !== datas.id)),
  ];

  return (
    <AllContext.Provider
      value={{ wishlist, basket, addToWishlist, addToBasket, datas }}
    >
      {props.children}
    </AllContext.Provider>
  );
};
