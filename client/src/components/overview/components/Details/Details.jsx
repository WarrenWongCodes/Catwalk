import React, { useContext, useEffect } from "react";
import { OverviewContext } from "../../overviewContext.jsx";
import { ProductContext } from "../../../../store.jsx";
import overviewStyles from "../../overview.module.css";
import styles from "./details.module.css";
import {
  IoIosCheckmark as Check,
  IoLogoFacebook as Facebook,
  IoLogoTwitter as Twitter,
  IoLogoPinterest as Pinterest,
} from "react-icons/io";

const {
  slogan,
  productDetail,
  descriptionContainer,
  featuresContainer,
  featureContainer,
  icon,
  icons,
} = styles;
const { detailsContainer } = overviewStyles;

const Details = () => {
  const product = useContext(ProductContext);
  const styles = useContext(OverviewContext);
  const { currentStyle } = useContext(OverviewContext);
  const { features = [] } = product;
  return (
    <div className={detailsContainer}>
      <div className={descriptionContainer}>
        <h2 className={slogan}>{product.slogan}.</h2>
        <p className={productDetail}>{product.description}</p>
        <div className={icons}>
          <Facebook />
          <Twitter />
          <Pinterest />
        </div>
      </div>
      <div className={featuresContainer}>
        {features.map(({ value }, i) => {
          return (
            <div key={i} className={featureContainer}>
              <Check className={icon} /> <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
