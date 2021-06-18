import React, { useContext } from "react";
import { OverviewContext } from "../../../../overviewContext.jsx";
import styles from "./description.module.css";
import { Link } from "react-scroll";
const { descriptionContainer, cat, sale, reviews, productDescription } = styles;

const Description = ({ product, styles }) => {
  const { currentStyle } = useContext(OverviewContext);
  if (product.category) var category = product.category.toUpperCase();
  return (
    <div className={descriptionContainer}>
      <div className={reviews}>
        <span>
          <Link to="scrollIntoComp" spy={true} smooth={true}>
            Read all reviews
          </Link>
        </span>
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
