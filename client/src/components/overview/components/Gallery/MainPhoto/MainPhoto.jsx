import React, { useContext, useEffect } from "react";
import { OverviewContext } from "../../../overviewContext.jsx";
import styles from "./mainPhoto.module.css";
const { image, imageContainer } = styles;

// console.log(window);
// window.addEventListener("load", function () {
//   console.log("running");
//   addZoom("zoom-img");
// });

const MainPhoto = ({ current = {} }) => {
  useEffect(() => {
    // console.log(current)
    if (current) {
      var addZoom = function (target) {
        // (A) FETCH CONTAINER + IMAGE
        var container = document.getElementById(target);
        var imgsrc =
          container.currentStyle || window.getComputedStyle(container, false);
        var imgsrc = current.url;
        var img = new Image();
        Object.assign(container.style, {
          backgroundPosition: "center",
          backgroundSize: "cover",
        });
        // (B) LOAD IMAGE + ATTACH ZOOM
        img.src = imgsrc;
        img.onload = function () {
          var imgWidth = img.naturalWidth;
          var imgHeight = img.naturalHeight;
          var ratio = imgHeight / imgWidth;
          var percentage = ratio * 100 + "%";

          // (C) ZOOM ON MOUSE MOVE
          container.onmousemove = function (e) {
            var boxWidth = container.clientWidth;
            var rect = e.target.getBoundingClientRect();
            var xPos = e.clientX - rect.left;
            var yPos = e.clientY - rect.top;
            var xPercent = xPos / (boxWidth / 100) + "%";
            var yPercent = yPos / ((boxWidth * ratio) / 100) + "%";

            Object.assign(container.style, {
              backgroundPosition: xPercent + " " + yPercent,
              backgroundSize: imgWidth + "px",
            });
          };

          // (D) RESET ON MOUSE LEAVE
          container.onmouseleave = function (e) {
            Object.assign(container.style, {
              backgroundPosition: "center",
              backgroundSize: "cover",
            });
          };
        };
      };
      addZoom("zoom-img");
    }
  }, [current]);

  return (
    <div
      className={imageContainer}
      id="zoom-img"
      style={{
        height: "100%",
        background: `url(${current.url})`,
      }}
    >
      {/* <img src={current ? current.url : ""} className={image}></img> */}
    </div>
  );
};

export default MainPhoto;
