import React, { useContext } from "react";
import { FooterContext } from "../../contexts/FooterContext";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  const { foot } = useContext(FooterContext);
  console.log(foot);
  return (
    <div className={style.sides}>
      {foot.map((footers, idx) => {
        return (
          <Link
            className={style.sides0}
            style={{ textDecoration: "none" }}
            to={`/somethingelse`}
            key={idx}
          >
            <img src={footers.img} alt="" />
            <div className={style.difdiv}>
              <h5>{footers.name}</h5>
              <p className={style.foottitle}>{footers.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
