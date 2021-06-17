import React, { useContext, useState } from "react";
import { OverviewContext } from "../../../overviewContext.jsx";
import styles from "./photos.module.css";
import { IoIosArrowDown as Down, IoIosArrowUp as Up } from "react-icons/io";
const {
  photosContainer,
  image,
  imageContainer,
  carousel,
  icons,
  deactivated,
  iconWrapper,
} = styles;

const Photos = ({ setCurrentImage }) => {
  const { currentStyle = [], setCurrentStyle } = useContext(OverviewContext);
  const [start, setStart] = useState(0);
  currentStyle.photos ? currentStyle.photos : undefined;
  // console.log(currentStyle.photos);
  const setImage = (p) => {
    setCurrentImage(p);
  };
  if (currentStyle.photos) {
    return (
      <div className={photosContainer}>
        <Icon direction="up" setStart={setStart} start={start} />
        <div className={carousel}>
          {currentStyle.photos.map((photo, i) => {
            if (i >= start && i < start + 7) {
              return (
                <div
                  key={i}
                  className={imageContainer}
                  onClick={() => setImage(photo)}
                >
                  <img src={photo.thumbnail_url} className={image}></img>
                </div>
              );
            }
          })}
        </div>
        <Icon
          direction="down"
          setStart={setStart}
          start={start}
          current={currentStyle.photos}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Icon = ({ direction, setStart, start, current }) => {
  const onClick = () => {
    const num = direction === "up" ? -1 : 1;
    setStart(start + num);
  };

  const shouldDissapear = () => {
    if (direction === "up") {
      return start === 0;
    } else {
      return start + 7 > current.length - 1;
    }
  };

  const Component =
    direction === "up" ? (
      <Up className={icons} onClick={onClick} />
    ) : (
      <Down className={icons} onClick={onClick} />
    );

  return (
    <div className={`${iconWrapper} ${shouldDissapear() ? deactivated : ""}`}>
      {Component}
    </div>
  );
};

export default Photos;

// return (
//   <div className={`${iconWrapper} ${shouldDissapear() ? deactivated : ""}`}>
//     {direction === "up" ? (
//       <Up className={icons} onClick={onClick} />
//     ) : (
//       <Down className={icons} onClick={onClick} />
//     )}
//   </div>
// );
