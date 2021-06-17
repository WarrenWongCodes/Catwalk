import React, { useContext } from "react";
import { OverviewContext } from "../../../../overviewContext.jsx";
import styles from "./description.module.css";
const { descriptionContainer, cat, sale, reviews, productDescription } = styles;

const Description = ({ product, styles }) => {
  const { currentStyle } = useContext(OverviewContext);
  console.log(currentStyle);
  if (product.category) var category = product.category.toUpperCase();
  return (
    <div className={descriptionContainer}>
      <div className={reviews}>
        <span>Read all reviews</span>
      </div>
      <div className={productDescription}>
        <p className={cat}>{category}</p>
        <h1>{product.name}</h1>
        <br></br>
        {currentStyle.sale_price ? (
          <p className={sale}>SALE ${currentStyle.sale_price}</p>
        ) : (
          <p>${currentStyle.original_price}</p>
        )}
      </div>
    </div>
  );
};

export default Description;
