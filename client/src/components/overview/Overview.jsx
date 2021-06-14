import React, { useContext } from "react";
import { ProductContext, StylesContext } from "../../store.jsx";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import styles from "./overview.module.css";
const { overview } = styles;

export default function Overview() {
  // const product = useContext(ProductContext);
  // const styles = useContext(StylesContext);

  // console.log("Overview Context from component", product.name);

  return (
    <div className={`container ${overview}`}>
      <Gallery />
      <Information />
    </div>
  );
}
