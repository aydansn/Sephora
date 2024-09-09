import { createContext } from "react";
import fen from "../assets/images/dyson.avif";
import skin from "../assets/images/sol.avif";
import body from "../assets/images/bag.jpeg";
export const DysonContext = createContext();
export const DysonProvider = (props) => {
  console.log(props);
  const dysons = [
    {
      img: body,
      id: 1,
      name: "Get It First on the App",
      title:
        "Limited-edition holiday sets drop every Friday. Shop before anyone else⁠—only on the app.",
      des: "DOWNLOAD NOW ▸",
    },
    {
      img: fen,
      id: 2,
      name: "Get It First on the App",
      title:
        "Limited-edition holiday sets drop every Friday. Shop before anyone else⁠—only on the app.",
      des: "DOWNLOAD NOW ▸",
    },
    {
      img: skin,
      id: 3,
      name: "Get It First on the App",
      title:
        "Limited-edition holiday sets drop every Friday. Shop before anyone else⁠—only on the app.",
      des: "DOWNLOAD NOW ▸",
    },
  ];
  return (
    <DysonContext.Provider value={{ dysons }}>
      {props.children}
    </DysonContext.Provider>
  );
};
