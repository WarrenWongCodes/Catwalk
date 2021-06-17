import React, { useContext, useState, useEffect } from "react";
import { StylesContext } from "../../store.jsx";
import Gallery from "./components/Gallery/Gallery";
import Information from "./components/Information/Information";
import Details from "./components/Details/Details.jsx";
import styles from "./overview.module.css";
import { OverviewContext, initialState } from "./overviewContext.jsx";
const { overview, combined } = styles;

export default function Overview() {
  const styleContext = useContext(StylesContext);
  const [currentStyle, setCurrentStyle] = useState({});
  useEffect(() => {
    if (styleContext.length !== 0) {
      setCurrentStyle(styleContext[0]);
    }
  }, [styleContext]);

  return (
    <OverviewContext.Provider value={{ currentStyle, setCurrentStyle }}>
      <div className={`container ${combined}`}>
        <div className={overview}>
          <Gallery />
          <Information />
        </div>
        <div>
          <Details />
        </div>
      </div>
    </OverviewContext.Provider>
  );
}
