import React, { useContext } from "react";
import { ProductContext, StylesContext } from "../../../../store.jsx";
import overviewStyles from "../../overview.module.css";
import Description from "./components/Description/Description.jsx";
import Styles from "./components/Styles/Styles.jsx";
import Actions from "./components/Actions/Actions.jsx";
const { infoContainer } = overviewStyles;

const Information = () => {
  const product = useContext(ProductContext);
  const styles = useContext(StylesContext);

  return (
    <div className={infoContainer}>
      <Description product={product} />
      <Styles styles={styles} />
      <Actions styles={styles} />
    </div>
  );
};

export default Information;
