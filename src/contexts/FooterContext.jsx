import { createContext } from "react";

import seph from "../assets/images/seph.png";
import log from "../assets/images/log.svg";
import sms from "../assets/images/sms.svg";
export const FooterContext = createContext();
export const FooterProvider = (props) => {
  console.log(props);
  const foot = [
    {
      img: log,
      id: 1,
      name: " Find a Store",
      title: "Choose Your Store",
    },
    {
      img: log,
      id: 2,
      name: "Customer Service",
      title: "Available",
    },
    {
      img: sms,
      id: 3,
      name: "Get the App",
      title: "Download Now",
    },
    {
      img: sms,
      id: 4,
      name: "Get Sephora Text Alerts",
      title: "Sign up Now",
    },

  ];
  return (
    <FooterContext.Provider value={{ foot }}>
      {props.children}
    </FooterContext.Provider>
  );
};
