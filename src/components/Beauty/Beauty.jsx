import React, { useContext } from "react";
import style from "./Beauty.module.css";
import { BeautyContext } from "../../contexts/BeautyContext";
import { Link } from "react-router-dom";

const Beauty = () => {
  const { beautyes } = useContext(BeautyContext);
  console.log(beautyes);
  return (
    <div>
      <h3 className={style.offers}>Beauty Offers (12)</h3>
      <div className={style.allBeauty}>
        {beautyes.map((sides, idx) => {
          return (
            <div>
              <Link style={{ textDecoration: "none" }} to={`/some`} key={idx}>
                <img className={style.imgbeauty} src={sides.img} alt="" />
                <div className={style.make}>
                  <h5 className={style.neses}>{sides.name}</h5>
                  <span className={style.tille}>{sides.title}</span>
                  <p className={style.neses0}>{sides.des}</p>
                  <div  className={style.only}>
                    {" "}
                    <button className={style.neses1}>{sides.btn}</button>
                    <div className={style.details}>{sides.detail}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beauty;
