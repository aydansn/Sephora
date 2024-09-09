import React, { useContext } from "react";
import style from "./Dyson.module.css";
import { DysonContext } from "../../contexts/DysonContext";
import { Link } from "react-router-dom";

const Dyson = () => {
  const { dysons } = useContext(DysonContext);
  console.log(dysons);
  return (
    <div>
      <div className={style.all}>
        {dysons.map((fen, idx) => {
          return (
            <div>
              <Link
                style={{ textDecoration: "none" }}
                to={`/someone`}
                key={idx}
              >
                <img className={style.fenn} src={fen.img} alt="" />
                <div className={style.lastdec}>
                <h3 className={style.names}>{fen.name}</h3>
                <div className={style.bash}>{fen.title}</div>
                <h5 className={style.desc}>{fen.des}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dyson;
