import React, { useContext } from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  XOutlined,
  YoutubeOutlined,
  PinterestOutlined,
  StrikethroughOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import style from "./LastFoot.module.css";
import { LastFootContext } from "../../contexts/LastFootContext";
import { Link } from "react-router-dom";
import canada from "../../assets/images/canada.svg";
import america from "../../assets/images/america.svg";
const LastFoot = () => {
  const { fot } = useContext(LastFootContext);
  console.log(fot);

  return (
    <div style={{ backgroundColor: "black" }}>
      <hr />
      <div className={style.birr}>
        <div className={style.neses}>
          {fot.map((fotters, idx) => {
            return (
              <div>
                <Link
                  className={style.def}
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/somethingelse`}
                  key={idx}
                >
                  <div className={style.var}>
                    <h5>{fotters.bigName}</h5>
                    <div className={style.nm}>{fotters.name1}</div>
                    <div className={style.nm0}>{fotters.name2}</div>
                    <div className={style.nm}>{fotters.name3}</div>
                    <div className={style.nm0}>{fotters.name4}</div>
                    <div className={style.nm}>{fotters.name5}</div>
                    <div className={style.nm0}>{fotters.name6}</div>
                    <div className={style.nm}>{fotters.name7}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={style.bir}>
          <div className={style.reg}>
            <h5>Region & Language</h5>
            <div className={style.nasa}>
              <img src={america} alt="" />
              <p className={style.eng}>Canada - English</p>
            </div>
            <div className={style.nasa}>
              <img src={canada} alt="" />
              <p className={style.eng}>Canada - English</p>
            </div>
            <div className={style.nasa}>
              <img src={canada} alt="" />
              <p className={style.eng}>Canada - English</p>
            </div>
          </div>

          <div className={style.move}>
            <h2 className={style.we}>
              We Belong to <br /> Something Beautiful
            </h2>

            <h5 className={style.up}>Sign up for Sephora text updates</h5>
            <div className={style.continue}>
              <input
                className={style.int1}
                type="text"
                placeholder="Mobile Phone Number"
              />
              <button className={style.btn0}>Continue</button>
            </div>
            <h5 className={style.up}>Sign up for Sephora text updates</h5>
            <div className={style.continue}>
              <input
                className={style.int1}
                type="text"
                placeholder="Mobile Phone Number"
              />
              <button className={style.btn0}>Continue</button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className={style.yan}>
        <div className={style.yan0}>
          <p className={style.on}>
            Sephora Beauty Canada, Inc. (160 Bloor St. East Suite 1100 Toronto,
            ON M4W 1B9 | Canada, sephora.ca) is requesting consent on its own
            behalf and on behalf of Sephora USA, Inc. (350 Mission Street, Floor
            7, San Francisco, CA 94105, sephora.com). You may withdraw your
            consent at any time.
          </p>
          <p className={style.one}>
            © 2024 Sephora USA, Inc. All rights reserved. <br />
            Privacy PolicyTerms of UseAccessibilitySitemapCookie Preferences
            <br />
            1-877-737-4672 TTY: 1-888-866-9845
          </p>
        </div>
        <div className={style.icons}>
          <InstagramOutlined />
          <FacebookOutlined />
          <XOutlined />
          <YoutubeOutlined />
          <PinterestOutlined />
          <StrikethroughOutlined />
          <TikTokOutlined />
        </div>
      </div>
    </div>
  );
};

export default LastFoot;
