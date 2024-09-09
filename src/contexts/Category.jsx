import { createContext } from "react";
export const CategoryContext = createContext();
export const CategoryProvider = (props) => {
  console.log(props);
  const infos = [
    {
      id: 1,
      name: "New",
      type: "makeup",
      url: "/makeup",
    },
    {
      id: 2,
      name: "Brands",
      type: "makeup",
    },
    {
      id: 3,
      name: "Makeup",
      type: "makeup",
    },
    {
      id: 4,
      name: "Skincare",
      type: "makeup",
    },
    {
      id: 5,
      name: "Hair",
      type: "makeup",
    },
    {
      id: 6,
      name: "Fragrance",
      type: "makeup",
    },
    {
      id: 7,
      name: "Tools & Brushes",
      type: "makeup",
    },
    {
      id: 8,
      name: "Mini Size",
      type: "makeup",
    },
    {
      id: 9,
      name: "Gifts & Gift Cards",
      type: "makeup",
    },
    {
      id: 10,
      name: "Beauty Under $20",
      type: "makeup",
    },
    {
      id: 11,
      name: "Sale & Offers",
      type: "makeup",
    },
  ];
  return (
    <CategoryContext.Provider value={{ infos }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
