import { createContext } from "react";
import qutu from "../assets/images/qutu.png";
import hediyye from "../assets/images/hediyye.png";
import difkrem from "../assets/images/difkrem.webp";
import ulduzlar from "../assets/images/ulduzlar.avif";

import kiprik from "../assets/images/kiprik.png";
import dollar from "../assets/images/dollar.avif";
import correct from "../assets/images/correnct.webp";
import daire from "../assets/images/daire.webp";

export const GiftsContext = createContext();
export const GiftsProvider = (props) => {
  console.log(props);
  const gif = [
    {
      id: 1,
      name: "Blush",
      img: kiprik,
    },
    {
      id: 2,
      name: "Serums",
      img: qutu,
    },
    {
      id: 3,
      name: "Trending on Social",
      img2: hediyye,
    },
    {
      id: 4,
      name: "Sale",
      img: ulduzlar,
    },
    {
      id: 5,
      name: "Clean + Planet Aware at Sephora",
      img2: difkrem,
    },
    {
      id: 6,
      name: "BIPOC Owned Brands",
      img2: dollar,
    },
    {
      id: 7,
      name: "Foundation",
      img2: correct,
    },
    {
      id: 8,
      name: "Gifts",
      img2: daire,
    },
  ];
  return (
    <GiftsContext.Provider value={{ gif }}>
      {props.children}
    </GiftsContext.Provider>
  );
};
