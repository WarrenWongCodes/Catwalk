import React, { useContext } from "react";
import { OverviewContext } from "../../../overviewContext.jsx";
import styles from "./mainPhoto.module.css";
const { image, imageContainer } = styles;

const MainPhoto = () => {
  const { currentStyle, setCurrentStyle } = useContext(OverviewContext);
  return (
    <div className={imageContainer}>
      <img
        src={currentStyle.photos ? currentStyle.photos[0].url : ""}
        className={image}
      ></img>
    </div>
  );
};

export default MainPhoto;
