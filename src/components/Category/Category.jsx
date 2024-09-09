import React, { useContext } from "react";
import style from "./Category.module.css";
import { CategoryContext } from "../../contexts/Category";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Category = () => {
  const { infos } = useContext(CategoryContext);
  console.log(infos);
  return (
    <div className={style.sideBySide}>
      {infos.map((mehsul, idx) => {
        return (
          <Link style={{ textDecoration: "none" }} to={`/make`} key={idx}>
            <div className={style.names}> {mehsul.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
