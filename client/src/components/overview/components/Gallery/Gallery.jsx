import React, { useContext, useState, useEffect } from "react";
import { OverviewContext } from "../../overviewContext.jsx";
import MainPhoto from "./MainPhoto/MainPhoto.jsx";
import Photos from "./Photos/Photos.jsx";
import overviewStyles from "../../overview.module.css";
const { galleryContainer } = overviewStyles;

const Gallery = () => {
  const { currentStyle } = useContext(OverviewContext);
  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    if (Object.keys(currentStyle).length !== 0) {
      setCurrentImage(currentStyle.photos[0]);
    }
  }, [currentStyle]);
  return (
    <div className={galleryContainer}>
      <MainPhoto current={currentImage} />
      <Photos setCurrentImage={setCurrentImage} />
    </div>
  );
};

export default Gallery;
