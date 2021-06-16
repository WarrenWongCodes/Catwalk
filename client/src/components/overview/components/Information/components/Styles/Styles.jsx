import React, { useContext } from "react";
import { OverviewContext } from "../../../../overviewContext.jsx";
import photoStyles from "./styles.module.css";
const { stylesContainer, imgContainer, image, styleText } = photoStyles;

const Styles = ({ styles }) => {
  const { currentStyle, setCurrentStyle } = useContext(OverviewContext);
  const onClick = (style) => {
    setCurrentStyle(style);
  };
  return (
    <div>
      <h5 className={styleText}>{`STYLE > ${currentStyle.name || ""}`}</h5>
      <div className={stylesContainer}>
        {styles.map((style, i) => (
          <div key={i} className={imgContainer} onClick={() => onClick(style)}>
            <img src={style.photos[0].thumbnail_url} className={image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Styles;
