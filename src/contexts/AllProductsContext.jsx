import { createContext } from "react";
import crema from "../assets/images/cremawebp.webp";
import fon from "../assets/images/fon.webp";
import fav from "../assets/images/fav.webp";
import parfum from "../assets/images/parfum.webp";
import zoom from "../assets/images/zoom.webp";
import ten from "../assets/images/ten.webp";
import ulduz from "../assets/images/star.svg";
export const AllProductsContext = createContext();
export const AllProductsProvider = (props) => {
  console.log(props);
  const stars = [
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
  return (
    <AllProductsContext.Provider value={{ stars }}>
      {props.children}
    </AllProductsContext.Provider>
  );
};
