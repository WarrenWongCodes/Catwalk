import React, { useContext } from "react";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import styles from "./overview.module.css";
const { overview } = styles;

export default function Overview() {
  return (
    <div className={`container ${overview}`}>
      <Gallery />
      <Information />
    </div>
  );
}
