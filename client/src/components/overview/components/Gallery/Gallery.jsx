import React from "react";
import MainPhoto from "./MainPhoto/MainPhoto.jsx";
import Photos from "./Photos/Photos.jsx";
import overviewStyles from "../../overview.module.css";
const { galleryContainer } = overviewStyles;

const Gallery = () => {
  return (
    <div className={galleryContainer}>
      <MainPhoto />
      <Photos />
    </div>
  );
};

export default Gallery;
