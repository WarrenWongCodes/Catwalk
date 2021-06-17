import React, { useContext, useEffect } from "react";
import { OverviewContext } from "../../../overviewContext.jsx";
import styles from "./mainPhoto.module.css";
const { image, imageContainer } = styles;

const MainPhoto = ({ current }) => {
  return (
    <div className={imageContainer}>
      <img src={current ? current.url : ""} className={image}></img>
    </div>
  );
};

export default MainPhoto;
