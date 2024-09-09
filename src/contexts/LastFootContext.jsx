import { createContext } from "react";
import canada from "../assets/images/canada.svg";
import america from "../assets/images/america.svg";
export const LastFootContext = createContext();
export const LastFootProvider = (props) => {
  console.log(props);
  const fot = [
    {
      id: 1,
      bigName: "About Sephora",
      name1: "About Sephora",
      name2: "Careers",
      name3: "Supply Chain Transparency",
      name4: "Affiliates",
      name5: "About Sephora",
      name6: "Careers",
      name7: "Supply Chain Transparency",
      name8: "Affiliates",
    },
    {
      id: 2,
      bigName: "My Sephora",
      name1: "Beauty Insider",
      name2: "Community Profile",
      name3: "Order Status",
      name4: "Purchase History",
      name5: "About Sephora",
      name6: "Account Settings",
      name7: "Beauty Advisor Recommendations",
      name8: "Auto-Replenishment",

      // Beauty Offers
      // Buying Guides
      // Rewards Bazaar
      // Loves
      // Book a Reservation
    },
    {
      id: 3,
      bigName: "Help",
      name1: "About Sephora",
      name2: "Careers",
      name3: "Supply Chain Transparency",
      name4: "Affiliates",
      name5: "About Sephora",
      name6: "Careers",
      name7: "Supply Chain Transparency",
      name8: "Affiliates",
    },
  ];
  return (
    <LastFootContext.Provider value={{ fot }}>
      {props.children}
    </LastFootContext.Provider>
  );
};
