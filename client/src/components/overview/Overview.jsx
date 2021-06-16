import React, { useContext } from "react";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import Details from "./components/Details/Details.jsx";
import styles from "./overview.module.css";
const { overview, combined } = styles;

export default function Overview() {
  return (
    <div className={`container ${combined}`}>
      <div className={overview}>
        <Gallery />
        <Information />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}
