import React, { useContext } from "react";
import { GiftsContext } from "../../contexts/GiftsContext";
import { Link } from "react-router-dom";
import style from "./Gifts.module.css";

const Gifts = () => {
  const { gif } = useContext(GiftsContext);
  console.log(gif);
  return (
    <div className={style.option}>
      <div className={style.somes}>
        <h3>Need a Little Guidance?</h3>
        <p>Check out what's popular now.</p>
      </div>
      <div className={style.allgif}>
        {gif.map((sales, idx) => {
          return (
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={`/someones`}
                key={idx}
              >
                <div className={style.pic}>
                <div className={style.makename}>{sales.name}</div>
                <img
                  className={style.imggif}
                  src={sales.img}
                  alt=""
                />
                <img className={style.imggif0} src={sales.img2} alt="" />
                </div>
              </Link>
             
            </div>
          );
        })}
      </div>
      <hr />
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Gifts;
