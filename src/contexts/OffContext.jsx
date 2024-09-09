import { createContext } from "react";
import rihanna from "../assets/images/rihannawebp.webp";
import sale from "../assets/images/sale.webp";
export const OffContext = createContext();
export const OffProvider = (props) => {
  console.log(props);
  const news = [
    {
      img: rihanna,
      id: 1,
      name: "    New Fenty Hair by Rihanna",
      title:
        "Multitasking formulas that nurture and hydrate hair of all types and textures.",
      shop: "SHOP NOW ▸",
    },
    {
      img: sale,
      id: 1,
      name: " Today Only: 50% off Select Beauty",
      title: "Save big at Sephora and Sephora at Kohl's until 9/19.",
      shop: "SHOP NOW ▸",
    },
  ];
  return (
    <OffContext.Provider value={{ news }}>{props.children}</OffContext.Provider>
  );
};
