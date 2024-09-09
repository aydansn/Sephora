import React from "react";
import { OffContext } from "../../contexts/OffContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import style from "./Off.module.css";

const Off = () => {
  const { news } = useContext(OffContext);
  console.log(news);
  return (
    <div>
      <div className={style.sideBy}>
        {news.map((fotos, idx) => {
          return (
            <Link style={{ textDecoration: "none" }} to={`/nese`} key={idx}>
              <img className={style.image0} src={fotos.img} alt="" />
              <div className={style.allOfThem}>
                <h3 className={style.img1}>{fotos.name}</h3>
                <p className={style.and}>{fotos.title}</p>
                <h4>{fotos.shop}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Off;
