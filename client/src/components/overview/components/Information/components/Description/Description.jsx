import React, { useContext } from "react";
import styles from "./description.module.css";
const { descriptionContainer, cat } = styles;

const Description = ({ product }) => {
  if (product.category) var category = product.category.toUpperCase();
  return (
    <div className={descriptionContainer}>
      <div>
        <p className={cat}>{category}</p>
        <h1>{product.name}</h1>
        <br></br>
        <p>${product.default_price}</p>
      </div>
    </div>
  );
};

export default Description;
