import React, { useContext } from "react";
import { ProductContext } from "../../../../store.jsx";
import overviewStyles from "../../overview.module.css";
import styles from "./details.module.css";
import { IoIosCheckmark as Check } from "react-icons/io";

const { slogan, productDetail, descriptionContainer, featuresContainer, icon } =
  styles;
const { detailsContainer } = overviewStyles;

const Details = () => {
  console.log(window.location.pathname.split("/", 3));
  const product = useContext(ProductContext);
  return (
    <div className={detailsContainer}>
      <div className={descriptionContainer}>
        <h2 className={slogan}>{product.slogan}.</h2>
        <p className={productDetail}>{product.description}</p>
      </div>
      <div className={featuresContainer}>
        <Check className={icon} />
        <Check className={icon} />
        <Check className={icon} />
        <Check className={icon} />
      </div>
    </div>
  );
};

export default Details;
