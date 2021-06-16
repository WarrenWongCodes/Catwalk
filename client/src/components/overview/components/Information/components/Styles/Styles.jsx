import React, { useContext } from "react";
import photoStyles from "./styles.module.css";
const { stylesContainer, imgContainer, image, styleText } = photoStyles;

const Styles = ({ styles }) => {
  return (
    <div>
      <h5 className={styleText}>{`STYLE > `}</h5>
      <div className={stylesContainer}>
        {styles.map(({ photos }, i) => (
          <div key={i} className={imgContainer}>
            <img src={photos[0].thumbnail_url} className={image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Styles;
