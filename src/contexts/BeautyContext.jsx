import { createContext } from "react";
import img01 from "../assets/images/img01.avif";
import img02 from "../assets/images/img02avif.avif";
import img03 from "../assets/images/img03.webp";
import img04 from "../assets/images/img04avif.avif";
import img05 from "../assets/images/img05avif.avif";

export const BeautyContext = createContext();
export const BeautyProvider = (props) => {
  console.log(props);
  const beautyes = [
    {
      img: img01,
      id: 1,
      name: "Get 4X Points††",
      title: "on ALL MAC Cosmetics.",
      des: "Beauty Insider members only.Online only • Ends 9/11/2024 ††Exclusions/terms apply. May be combined with other promotional offers.",
      btn: "Apply",
      detail: "See details",
    },
    {
      img: img02,
      id: 2,
      name: "Get 4X Points††",
      title: "on ALL MAC Cosmetics.",
      des: "Beauty Insider members only.Online only • Ends 9/11/2024 ††Exclusions/terms apply. May be combined with other promotional offers.",
      btn: "Apply",
      detail: "See details",
    },
    {
      img: img03,
      id: 3,
      name: "Get 4X Points††",
      title: "on ALL MAC Cosmetics.",
      des: "Beauty Insider members only.Online only • Ends 9/11/2024 ††Exclusions/terms apply. May be combined with other promotional offers.",
      btn: "Apply",
    },
    {
      img: img04,
      id: 4,
      name: "Get 4X Points††",
      title: "on ALL MAC Cosmetics.",
      des: "Beauty Insider members only.Online only • Ends 9/11/2024 ††Exclusions/terms apply. May be combined with other promotional offers.",
      btn: "Shop Now",
    },
    {
      img: img05,
      id: 5,
      name: "Get 4X Points††",
      title: "on ALL MAC Cosmetics.",
      des: "Beauty Insider members only.Online only • Ends 9/11/2024 ††Exclusions/terms apply. May be combined with other promotional offers.",
      btn: "Shop Now",
    },
  ];
  return (
    <BeautyContext.Provider value={{ beautyes }}>
      {props.children}
    </BeautyContext.Provider>
  );
};
